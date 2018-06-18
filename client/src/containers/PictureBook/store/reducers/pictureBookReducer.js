const initialState =
{
    title: '',
    url: '',
    books: [],
}

const pictureBookReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case('TITLE'):
        return{
            ...state,
            title: action.title
        }

        case('URL'):
        return{
            ...state,
            url: action.url
        }

        case('SUBMIT'):
        return{
            ...state,
            title: '',
            url: '',
        }

        case('GET_BOOKS'):
        return{
            ...state,
            books: action.books
        }

        default: return state
    }
}





export default pictureBookReducer
