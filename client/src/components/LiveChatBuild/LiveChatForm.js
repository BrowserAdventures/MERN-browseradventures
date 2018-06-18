import React from 'react'
import styled from 'styled-components'

import arrowImage from '../../assets/imgs/HeaderImages/arrow.png'


const livechatForm=(props)=>
{
    return(<Container>
        <Form onSubmit={(E)=> E.preventDefault(props.submit(props.value))}>
            <Input
                type='input'
                name='text'
                placeholder='text...'
                value={props.value.text}
                onChange={(E)=> props.onChange(E.target)}
            />
            <Image
                alt=''
                src={arrowImage}
                onClick={(E)=> E.preventDefault(props.submit(props.value))}
            />
        </Form>
    </Container>)
}

const Container = styled.div`
    position: fixed;
    background-color: rgba(0,0,0, 0.5);
    padding: 10px;
    text-align: center;
    box-sizing: border-box;
    bottom: 0%;
    left: 0%;
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
`
const Form = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    width: 400px;
    text-align: center;
`
const Input = styled.input`
    width: 250px;
    height: 20px;
    background: rgba(255,255,255, 0.8);

    @media (max-width: 500px) {
        width: 200px;
    }
`
const Image = styled.img`
    width: 60px;
    height: 60px;
    background: rgba(255,204,153, 0.4);
    border-radius: 90px;
    border: 1px solid rgba(0,0,0, 0.4);
    transform: rotate(90deg);
    margin-left: 50px;
    margin-top: -10px;

    :hover {
        cursor: pointer;
        background: rgba(255,204,153, 0.6);
    }

    :active {
        background: green;
    }

    @media (max-width: 500px) {
        margin-left: 20px;
    }
`



export default livechatForm
