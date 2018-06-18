import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import * as actions from './store/actions/registerActions'
import types from './store/types/types'

import Header from '../../../components/UI/Header/Header'
import RegisterForm from '../../../components/AccountBuilder/RegisterForm'


class Register extends Component
{
    render()
    {
        const registerAuthenticated = this.props.isAuthenticated &&
            this.props.history.push('/account')

        return(<Fragment>
            <Header noMargin
                title='Sign Up'
                backButton={()=> this.props.history.push('/account')}
            />

            <RegisterForm
                value={this.props.userInput}
                submit={this.props.submitRegister}
                onChange={this.props.onChangeInput}
                errors={this.props.errors}
            />

            {registerAuthenticated}
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    const {errors, isAuthenticated, name, email, password, password2} = state.registerReducer

    return{
        errors,
        isAuthenticated,
        userInput: {
            name: name,
            email: email,
            password: password,
            password2: password2,
        },
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        submitRegister: (input)=> dispatch(actions.registerRequest(input)),
        onChangeInput: (target)=> dispatch({type: types.USER_INPUT, target})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Register)
