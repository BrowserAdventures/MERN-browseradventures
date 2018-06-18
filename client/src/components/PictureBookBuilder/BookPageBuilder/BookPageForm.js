import React from 'react'
import styled from 'styled-components'


const bookPageForm=(props)=> (

    <Form onSubmit={(E)=> E.preventDefault(props.submit(props.description))}>
        <h3>Write a new description!</h3>
        <label>Description</label>
        <input
            type='input'
            placeholder='enter a description...'
            value={props.description}
            onChange={(E)=> props.onChange(E.target.value)}
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


export default bookPageForm
