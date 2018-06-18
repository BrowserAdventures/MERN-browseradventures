import React from 'react'
import styled from 'styled-components'

import {images} from '../../../assets/imgs/HeaderImages'


const header=(props)=>
{
    const backButtonType = props.backButton ?
        <Image
            src={images['arrow.png']}
            onClick={props.backButton}
            alt=''
        /> :
        <span />
    ;

    const nextButtonType = props.nextButton ?
        <Image
            src={images['arrow.png']}
            onClick={props.nextButton}
            nextButton={props.nextButton}
            alt=''
        /> :
        <span />
    ;

    return(<Wrapper noMargin={props.noMargin}>
        {backButtonType}
        <div onClick={props.click}><h3>{props.title}</h3></div>
        {nextButtonType}
    </Wrapper>)
}


const Wrapper = styled.div`
    background: rgba(0,0,0, 0.7);
    width: 100%;
    height: 60px;
    margin-bottom: ${props=> props.noMargin || '20px'};
    display: grid;
    grid-template-columns: 60px 1fr 60px;

    div {
        height: 100%;
        text-align: center;
        color: white;
    }
`
const Image = styled.img`
    width: 60px;
    height: 100%;
    ${props=> props.nextButton && 'transform: rotate(-180deg)'};

    :hover {
        cursor: pointer;
        background: rgba(0,0,0, 0.3);
    }
`


export default header
