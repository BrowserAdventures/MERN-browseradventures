const initialState =
{
    description: '',
    descriptions: [],
}

const bookPageReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case('DESCRIPTION'):
        return{
            ...state,
            description: action.description
        }

        case('SUBMIT'):
        return{
            ...state,
            description: '',
        }

        case('GET_DESCRIPTIONS'):
        return{
            ...state,
            descriptions: action.descriptions
        }

        default: return state
    }
}





export default bookPageReducer
