import types from '../types/types'

const initialState =
{
    name: '',
    email: '',
    password: '',
    password2: '',
    user: {},
    errors: {},
    isAuthenticated: false,
}

const registerReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case(types.USER_INPUT):
        return{
            ...state,
            [action.target.name]: action.target.value
        }

        case(types.REGISTER_SUCCESS):
        return{
            ...state,
            name: '',
            email: '',
            password: '',
            password2: '',
            user: action.payload,
            isAuthenticated: true,
        }

        case(types.REGISTER_ERRORS):
        return{
            ...state,
            name: '',
            email: '',
            password: '',
            password2: '',
            errors: action.payload,
            isAuthenticated: false,
        }

        default: return state
    }
}



export default registerReducer
