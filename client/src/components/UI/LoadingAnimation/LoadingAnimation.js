import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Wrapper} from '../../styles/styles'
import monsterSprite from '../../../assets/imgs/sprites/monsterSprite.png'


const loadingAnimation=(props)=>
{
    return(<Wrapper direction='column'>
        <Container>
            <p>Loading...</p>
            <Sprite />
        </Container>
    </Wrapper>)
}

const SpriteAnimationX = keyframes`
    from{
        background-position-x: 0px;
    }
    to{
        background-position-x: -710px;
    }
`
const SpriteAnimationY = keyframes`
    from{
        background-position-y: 0px;
    }
    to{
        background-position-y: -355px;
    }
`
const Sprite = styled.div`
    width: 118.333px;
    height: 118.333px;
    background-image: url(${monsterSprite});
    animation: ${SpriteAnimationX} 1s steps(6) infinite,
               ${SpriteAnimationY} 3s steps(3) infinite;
`
const Container = styled.div`
    background: rgba(255,255,255, 0.3);
    text-align: center;
    box-shadow: 2px 2px 0 0 rgba(0,0,0, 0.4);
    width: 119px;
`


export default loadingAnimation
