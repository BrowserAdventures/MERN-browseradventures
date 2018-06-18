import axios from 'axios'
import jwt_decode from 'jwt-decode'

import types from '../types/types'
import setAuthToken from '../../../../../utils/setAuthToken'


const loginSuccess=(res)=>
{
    return{
        type: types.LOGIN_SUCCESS,
        payload: res
    }
}

const loginErrors=(errors)=>
{
    return{
        type: types.LOGIN_ERRORS,
        payload: errors
    }
}

export const fetchLogin=(input)=>
{
    return dispatch=> axios.post('/api/users/login', input)
        .then(res=> {
            const {token} = res.data
            console.log(`[login Action Success]:`, res.data)
            dispatch(loginSuccess(res.data))
            localStorage.setItem('jwtToken', token)

            setAuthToken(token)
            const decoded = jwt_decode(token)
            dispatch(setCurrentUser(decoded))
        })
        .catch(err=> {
            console.log(err.response.data)
            dispatch(loginErrors(err.response.data))
        })
}

export const setCurrentUser=(decoded)=>
{
    return{
        type: types.SET_CURRENT_USER,
        payload: decoded
    }
}

export const logoutUser=()=>
{
    return dispatch=> {
        localStorage.removeItem('jwtToken')
        setAuthToken(false)
        dispatch(setCurrentUser({}))
    }
}
