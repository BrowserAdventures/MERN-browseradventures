import React from 'react'
import styled from 'styled-components'
import {Wrapper} from '../styles/styles'


const loginForm=(props)=>
{
    const {email, password} = props.errors

    return(<Wrapper>
        <Form onSubmit={(E)=> E.preventDefault(props.submit(props.value))}>
            <h3>Log in to your account!</h3>

            <Label show={email}>{email}</Label>
            <Input
                type='input'
                name='email'
                placeholder='Email Address...'
                value={props.value.email}
                onChange={(E)=> props.onChange(E.target)}
                border={email}
            />

            <Label show={password}>{password}</Label>
            <Input
                type='input'
                name='password'
                placeholder='Password...'
                value={props.value.password}
                onChange={(E)=> props.onChange(E.target)}
                border={password}
            />

            <input type='submit' value='Log in' />
        </Form>
    </Wrapper>)
}


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    width: 250px;
    text-align: center;
`

const Input = styled.input`
    margin-bottom: 20px;
    border: 1px solid ${props=> props.border === undefined ? 'rgba(0,0,0, 0.7)' : 'red'};
`

const Label = styled.label`
    font-size: 12px;
    color: red;
`




export default loginForm
