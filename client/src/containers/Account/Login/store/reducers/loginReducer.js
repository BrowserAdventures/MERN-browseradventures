import types from '../types/types'
import isEmpty from '../../../../../utils/is-empty'

const initialState =
{
    email: '',
    password: '',
    user: {},
    errors: {},
    isAuthenticated: false,
}

const loginReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case(types.USER_INPUT):
        return{
            ...state,
            [action.target.name]: action.target.value
        }

        case(types.LOGIN_ERRORS):
        return{
            ...state,
            email: '',
            password: '',
            errors: action.payload,
            isAuthenticated: false,
        }

        case(types.SET_CURRENT_USER):
        return{
            ...state,
            isAuthenticated: !isEmpty(action.payload),
            user: action.payload
        }

        default: return state
    }
}



export default loginReducer
