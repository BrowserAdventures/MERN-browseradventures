const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const socketIO = require('socket.io')
const http = require('http')
const path = require('path')

const db_key = require('./config/keys').mongoURI
const users = require('./routes/api/users')

const app = express()
const server = http.createServer(app)
const io = socketIO(server)

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


mongoose.connect(db_key)
    .then(()=> console.log('MongoDB Connected'))
.catch(err=> console.log(err))

app.use(passport.initialize())

require('./config/passport')(passport)

// Routes
app.use('/api/users', users)


io.on('connection', socket=>
{
    console.log('User connected')

    socket.on('createMessage', (message)=> {
        console.log('createMessage', message)

        io.emit('newMessage', {
            from: message.from,
            text: message.text,
            avatar: message.avatar,
            createdAt: new Date().getTime()
        })
    })

    socket.on('disconnect', ()=> {
        console.log('User disconnected')
    })
})


if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res)=> {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


const port = process.env.PORT || 4000
server.listen(port, ()=> console.log(`Server running on port ${port}`))
