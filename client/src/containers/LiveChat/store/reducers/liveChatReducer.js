import types from '../types/types'

const initialState =
{
    from: '',
    text: '',
    messages: [],
    modal: false,
}

const liveChatReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case(types.USER_INPUT):
        return{
            ...state,
            text: action.target.value
        }

        case(types.CLEAR_USER_INPUT):
        return{
            ...state,
            from: '',
            text: ''
        }

        case(types.UPDATE_MESSAGES):
        return{
            ...state,
            messages: state.messages.concat(action.payload)
        }

        case(types.CHANGE_MODAL_STATE):
        return{
            ...state,
            modal: action.boolean
        }

        default: return state
    }
}



export default liveChatReducer
