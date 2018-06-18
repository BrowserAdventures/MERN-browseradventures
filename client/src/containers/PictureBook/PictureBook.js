import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from './store/actions/pictureBookActions'

import HeaderFlip from '../../components/UI/Header/HeaderFlip'
import Modal from '../../components/UI/Modal/Modal'

import PictureBookForm from '../../components/PictureBookBuilder/PictureBookForm'
import PictureBookBuilder from '../../components/PictureBookBuilder/PictureBookBuilder'


class PictureBook extends Component
{
    componentWillMount()
    {
        this.setState({modal: false})
        this.props.getBooks()
    }

    submit=(title, url)=>
    {
        this.props.addBook(title, url)
        this.setState({modal: false})
    }

    openBook=(book)=>
    {
        this.props.history.push({
            pathname: '/bookpage',
            state: book
        })
    }

    render()
    {
        return(<div>
            <HeaderFlip
                title='Picture Book' instructions='Create a new Book?'
                backButton={()=> this.props.history.push('/')}
                click={()=> this.setState({modal:true})}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
                <PictureBookForm
                    title={this.props.title} onChangeTitle={this.props.inputTitle}
                    url={this.props.url} onChangeURL={this.props.inputURL}
                    submit={this.submit}
                />
            </Modal>
            <PictureBookBuilder
                books={this.props.books}
                open={this.openBook}
                delete={this.props.deleteBook}
            />
        </div>)
    }
}


const mapStateToProps=(state)=>
{
    const {title, url, books} = state.pictureBookReducer

    return{
        title: title,
        url: url,
        books: books,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        inputTitle: (input)=> dispatch({type: 'TITLE', title: input}),
        inputURL: (input)=> dispatch({type: 'URL', url: input}),
        addBook: (title, url)=> dispatch(actions.add_book({title: title, url: url})),
        getBooks: ()=> dispatch(actions.get_books()),
        deleteBook: (id)=> dispatch(actions.delete_book(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PictureBook)
