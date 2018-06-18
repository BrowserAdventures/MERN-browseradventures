import types from '../types/types'
import axios from 'axios'

const registerSuccess=(res)=>
{
    return{
        type: types.REGISTER_SUCCESS,
        payload: res
    }
}

const registerErrors=(errors)=>
{
    return{
        type: types.REGISTER_ERRORS,
        payload: errors
    }
}

export const registerRequest=(input)=>
{
    return dispatch=> axios.post('/api/users/register', input)
        .then(res=> {
            console.log(`[register Action Success]:`, res.data)
            dispatch(registerSuccess(res.data))
        })
        .catch(err=> {
            console.log(err.response.data)
            dispatch(registerErrors(err.response.data))
        })
}
