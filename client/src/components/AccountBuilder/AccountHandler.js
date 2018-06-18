import React from 'react'
import styled from 'styled-components'

import {Wrapper} from '../styles/styles'


const accountHandler=(props)=>
{
    const type = {
        pathname: props.login ? 'login' : props.logout ? null : 'register',
        message: props.login
            ? 'Log in' : props.logout
            ? 'Log out' : 'Dont have an account? Click here.'
    }

    return<Wrapper onClick={()=> props.open(type.pathname)}>
        <Container>
            <p>{type.message}</p>
        </Container>
    </Wrapper>
}


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0,0,0,0.7);
    border-radius: 5px;
    border: 1px solid #2ecc71;
    width: 350px;
    height: 70px;
    text-align: center;
    padding:  0 20px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        width: 200px;
        height: 100px;
    }

    :hover {
        cursor: pointer;
        background: rgba(0,0,0,0.8);
    }

    img {
        height: 350px;
        border: 1px solid #2ecc71;
        background: rgba(0,0,0,0.3);

        @media (max-width: 500px) {
            width: 200px;
            height: 225px;
        }
    }

    p {
        height: 40px;
        color: #2ecc71;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(0,0,0, 0.2);
        padding: 5px;
    }

    h3 {
        color: #2ecc71;
    }
`


export default accountHandler
