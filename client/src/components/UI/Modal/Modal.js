import React, {Fragment} from "react"
import styled, {keyframes} from 'styled-components'
import Transition from "react-transition-group/Transition"

import Backdrop from './Backdrop/Backdrop'


const modal=(props)=> (<Transition
    in={props.show}
    timeout={500}
    mountOnEnter
    unmountOnExit>
    {state=> (<Fragment>
        <Container show={state}>
            {props.children}
        </Container>
        <Backdrop show={state} close={props.close} />
    </Fragment>)}
</Transition>)


const openModal = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    50% {
        opacity: 1;
        transform: translateX(90%);
    }
    100% {
        opacity: 1;
        transform: translateY(0);
    }
`
const closeModal = keyframes`
    0% {
        opacity: 1;
        transform: translateY(0);
    }
    50% {
        opacity: 0.8;
        transform: translateY(60%);
    }
    90% {
        opacity: 0;
        transform: translateY(-100%);
    }
    100% {
        opacity: 0;
        transform: translateX(-100%);
    }
`
const animate=(props)=>(
    props.show === 'entering' ? openModal :
    props.show === 'exiting' && closeModal
)


const Container = styled.div`
    position: fixed;
    z-index: 500;
    border: 1px solid rgba(0,0,0, 0.5);
    background-color: white;
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    top: 30%;
    left: 35%;
    width: 30%;
    transition: all 0.3s ease-out;
    animation: ${animate} 0.4s ease-out forwards;
    display: flex;
    justify-content: center;

    @media (max-width: 800px) {
        top: 15%;
        left: 24%;
        width: 52%;
    }
`

export default modal
