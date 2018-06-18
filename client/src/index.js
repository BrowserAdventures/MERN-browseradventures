import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import {BrowserRouter} from 'react-router-dom'

import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'

import jwt_decode from 'jwt-decode'

import setAuthToken from './utils/setAuthToken'
import {setCurrentUser} from './containers/Account/Login/store/actions/loginActions'


export const store = createStore(rootReducer, applyMiddleware(thunk))

if(localStorage.jwtToken)
{
    setAuthToken(localStorage.jwtToken) // set auth token header
    const decoded = jwt_decode(localStorage.jwtToken)
    // set user if authenticated
    store.dispatch(setCurrentUser(decoded))
}


const app = (<BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
</BrowserRouter>)


ReactDOM.render(app, document.getElementById( 'root' ))
