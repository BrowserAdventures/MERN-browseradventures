import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import * as actions from './Login/store/actions/loginActions'

import Header from '../../components/UI/Header/Header'
import HomePageBuilder from '../../components/HomePageBuilder/HomePageBuilder'
import AccountHandler from '../../components/AccountBuilder/AccountHandler'


class Account extends Component
{
    componentDidMount()
    {
        !this.props.isAuthenticated && this.props.history.push('/login')
    }

    componentWillReceiveProps(nextProps) {
        !nextProps.isAuthenticated && this.props.history.push('/login')
    }

    render()
    {
        return(<Fragment>

            <Header
                title={`${this.props.user.name || 'Account'}`}
                backButton={()=> this.props.history.push('/')}
            />

            <HomePageBuilder image={this.props.user.avatar} />

            <AccountHandler logout open={this.props.logout} />

        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    return{
        isAuthenticated: state.loginReducer.isAuthenticated,
        user: state.loginReducer.user
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        logout: ()=> dispatch(actions.logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
