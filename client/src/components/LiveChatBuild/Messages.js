import React, {Fragment} from 'react'
import styled from 'styled-components'
import {Wrapper} from '../styles/styles'


const messages=({messageArray})=>
{
    const messageList = messageArray.map(message=> (
    <Wrapper key={message.createdAt}>
        <Container>
            <ProfileWrapper>
                <img src={message.avatar} alt='' />
                <h3>{message.from}</h3>
            </ProfileWrapper>
            <p>{message.text}</p>
        </Container>
    </Wrapper>))

    return<Fragment>{messageList}</Fragment>
}

const ProfileWrapper = styled.div`
    display: flex;
    width: 100%;

    img {
        height: 50px;
        width: 50px;
        padding-top: 10px;
    }

    h3 {
        color: #2ecc71;
        margin-left: 100px;

        @media (max-width: 500px) {
            margin-left: 50px;
        }
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: rgba(0,0,0,0.7);
    border-radius: 5px;
    border: 1px solid #2ecc71;
    width: 350px;
    text-align: center;
    padding:  0 20px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        width: 250px;
    }

    :hover {
        cursor: pointer;
        background: rgba(0,0,0,0.8);
    }

    p {
        color: #2ecc71;
        display: flex;
        justify-content: center;
        flex-direction: column;
        background: rgba(0,0,0, 0.2);
        padding: 5px;
        margin-top: 5px;
        margin-bottom: 10px;
    }
`


export default messages
