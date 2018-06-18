import React from 'react'
import styled from 'styled-components'
import {Wrapper} from '../styles/styles'


const homePageBuilder=(props)=> (<Wrapper>
    <Container onClick={()=> props.open(props.pathname)}>
        <h3>{props.title}</h3>
        <img
            src={props.image}
            alt=''
        />
        <p>{props.instructions}</p>
    </Container>
</Wrapper>)


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0,0,0,0.7);
    border-radius: 5px;
    border: 1px solid #2ecc71;
    max-width: 350px;
    max-height: 500px;
    text-align: center;
    padding:  0 20px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        width: 200px;
        height: 350px;
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


export default homePageBuilder
