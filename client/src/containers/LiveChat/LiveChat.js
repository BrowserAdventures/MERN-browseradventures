import React, {Component, Fragment} from 'react'
import socketIOClient from 'socket.io-client'
import {connect} from 'react-redux'

import types from './store/types/types'

import Header from '../../components/UI/Header/Header'
import LiveChatForm from '../../components/LiveChatBuild/LiveChatForm'
import Messages from '../../components/LiveChatBuild/Messages'


class LiveChat extends Component
{
    componentWillMount()
    {
        this.socket = socketIOClient()

        this.socket.on('connect', ()=>
        {
            console.log('client connected')
        })

        this.socket.on('newMessage', (message)=> {
            this.props.updateMessages(message)
        })

        this.props.clearUserInput()
    }

    sendMessage=(message)=>
    {
        this.socket.emit(`createMessage`, message)
        this.props.clearUserInput()
    }

    render()
    {
        return(<Fragment>
            <Header
                title='Live Chat'
                backButton={()=> this.props.history.push('/')}
            />

            <LiveChatForm
                value={this.props.userInput}
                submit={this.sendMessage}
                onChange={this.props.onChangeInput}
            />

            <Messages messageArray={this.props.messages} />
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    return{
        userInput: {
            from: state.loginReducer.user.name,
            avatar: state.loginReducer.user.avatar,
            text: state.liveChatReducer.text
        },
        messages: state.liveChatReducer.messages,
        modal: state.liveChatReducer.modal,

    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        onChangeInput: (target)=> dispatch({type: types.USER_INPUT, target}),
        clearUserInput: ()=> dispatch({type: types.CLEAR_USER_INPUT}),
        updateMessages: (payload)=> dispatch({type: types.UPDATE_MESSAGES, payload}),
        changeModal: (boolean)=> dispatch({type: types.CHANGE_MODAL_STATE, boolean})
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(LiveChat)
