import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import * as actions from './store/actions/loginActions'
import types from './store/types/types'

import Header from '../../../components/UI/Header/Header'
import LoginForm from '../../../components/AccountBuilder/LoginForm'
import AccountHandler from '../../../components/AccountBuilder/AccountHandler'


class Login extends Component
{
    componentWillReceiveProps(nextProps) {
        nextProps.isAuthenticated && this.props.history.push('/account')
    }

    render()
    {
        return(<Fragment>
            <Header noMargin
                title='Log in'
                backButton={()=> this.props.history.push('/')}
            />

            <LoginForm
                value={this.props.userInput}
                submit={this.props.sendLogin}
                onChange={this.props.onChangeInput}
                errors={this.props.errors}
            />

            <AccountHandler open={this.props.history.push} />

        </Fragment>)
    }
}


const mapStateToProps=(state)=>
{
    return{
        errors: state.loginReducer.errors,
        isAuthenticated: state.loginReducer.isAuthenticated,
        userInput: {
            email: state.loginReducer.email,
            password: state.loginReducer.password
        },
        user: state.loginReducer.user
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        sendLogin: (input)=> dispatch(actions.fetchLogin(input)),
        onChangeInput: (target)=> dispatch({type: types.USER_INPUT, target})
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(Login)
