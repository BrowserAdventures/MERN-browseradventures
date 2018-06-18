const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')

const keys = require('../../config/keys')
const User = require('../../models/Users')

// Load Input Validation
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')


router.post('/register', (req, res)=>
{
    const {errors, isValid} = validateRegisterInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne({email: req.body.email}).then(user=>
    {
        if(user) {
            errors.email = 'Email already exists'
            return res.status(400).json(errors)
        }else{
            const avatar = gravatar.url(req.body.email, {
                s: '200',
                r: 'pg',
                d: 'mm'
            })

            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                avatar,
                password: req.body.password,
            })

            bcrypt.genSalt(10, (err, salt)=> {
                bcrypt.hash(newUser.password, salt, (err, hash)=> {
                    if(err) throw err;
                    newUser.password = hash
                    newUser.save().then(user=> res.json(user))
                        .catch(err=> console.log(err))
                })
            })
        }
    })
})

router.post('/login', (req, res)=>
{
    const {email, password} = req.body
    const {errors, isValid} = validateLoginInput(req.body)

    if(!isValid) {
        return res.status(400).json(errors)
    }

    User.findOne({email}).then(user=>
    {
        if(!user) {
            errors.email = 'User not found'
            return res.status(404).json(errors)
        }

        bcrypt.compare(password, user.password).then(matched=>
        {
            if(matched) {
                const payload = {
                    id: user.id,
                    name: user.name,
                    avatar: user.avatar
                }

                const callback=(err, token)=> {
                    res.json({success: true, token: `Bearer ${token}`})
                }

                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {expiresIn: '24h'},
                    callback
                )
            }else{
                errors.password = 'Password incorrect'
                return res.status(400).json(errors)
            }
        })
    })
})


router.get('/current', passport.authenticate('jwt', {session:false}), (req, res)=>
{
    const res_payload = {
        id: req.user.id,
        name: req.user.name,
        email: req.user.email
    }
    res.json(res_payload)
})





module.exports = router
