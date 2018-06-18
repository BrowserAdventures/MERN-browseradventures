import {combineReducers} from 'redux'

import pictureBookReducer from './containers/PictureBook/store/reducers/pictureBookReducer'
import bookPageReducer from './containers/PictureBook/store/reducers/bookPageReducer'
import pokemonReducer from './containers/Pokemon/store/reducers/pokemonReducer'
import loginReducer from './containers/Account/Login/store/reducers/loginReducer'
import registerReducer from './containers/Account/Register/store/reducers/registerReducer'
import liveChatReducer from './containers/LiveChat/store/reducers/liveChatReducer'


const rootReducer = combineReducers({
    pictureBookReducer,
    bookPageReducer,
    pokemonReducer,
    loginReducer,
    registerReducer,
    liveChatReducer
})


export default rootReducer
