import React from 'react'
import styled from 'styled-components'



const pictureBookForm=(props)=> (

    <Form onSubmit={(E)=> E.preventDefault(props.submit(props.title, props.url))}>
        <h3>Create a New Book!</h3>
        <label>Picture Name</label>
        <input
            type='input'
            placeholder='enter picture name...'
            value={props.title}
            onChange={(E)=> props.onChangeTitle(E.target.value)}
        />
        <label>Picture URL</label>
        <input
            type='input'
            placeholder='paste picture url...'
            value={props.url}
            onChange={(E)=> props.onChangeURL(E.target.value)}
        />
        <input type='submit' value='Submit' />
    </Form>
)


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    margin: 20px;
    width: 200px;
    text-align: center;

    input {
        margin-bottom: 20px;
    }
`


export default pictureBookForm
