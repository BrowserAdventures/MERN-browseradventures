import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/bookPageActions'

import HeaderFlip from '../../../components/UI/Header/HeaderFlip'
import Modal from '../../../components/UI/Modal/Modal'

import BookPageForm from '../../../components/PictureBookBuilder/BookPageBuilder/BookPageForm'
import BookPageBuilder from '../../../components/PictureBookBuilder/BookPageBuilder/BookPageBuilder'


class BookPage extends Component
{
    componentWillMount()
    {
        this.passedState = this.props.location.state;
        this.setState({modal: false})
        this.props.getDescriptions(this.passedState.id)
    }

    submit=(description)=>
    {
        this.props.addDescription(this.passedState.id, description)
        this.setState({modal: false})
    }

    delete=(id)=>
    {
        this.props.deleteDescription(this.passedState.id, id)
    }

    render()
    {
        return(<div>
            <HeaderFlip
                title={this.passedState.title} instructions='add new description?'
                backButton={()=> this.props.history.push('/picturebook')}
                click={()=> this.setState({modal:true})}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
                <BookPageForm
                    description={this.props.description}
                    onChange={this.props.inputDescription}
                    submit={this.submit}
                />
            </Modal>
            <BookPageBuilder
                descriptions={this.props.descriptions}
                delete={this.delete}
                src={this.passedState.url}
            />
        </div>)
    }
}


const mapStateToProps=(state)=>
{
    const {description, descriptions} = state.bookPageReducer

    return{
        description: description,
        descriptions: descriptions,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        inputDescription: (input)=> dispatch({type: 'DESCRIPTION', description: input}),
        addDescription: (id, input)=> dispatch(actions.add_description(id, input)),
        getDescriptions: (id)=> dispatch(actions.get_descriptions(id)),
        deleteDescription: (book, description)=> dispatch(actions.delete_description(book, description)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BookPage)
