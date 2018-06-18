import React from 'react'
import styled from 'styled-components'

import Toolbar from './Toolbar/Toolbar'


const layout=(props)=> (<Wrapper background={props.background}>
    <Toolbar />
    <Border />
        <Content {...props} />
    <Border />
</Wrapper>)


const Wrapper = styled.div`
    margin-top: -4px;
    min-height: 100vh;
    display: flex;
`
const Border = styled.div`
    min-height: 100vh;
    width: 50px;
    border-left: 1px solid black;
    border-right: 1px solid black;
    background: rgba(0,0,0, 0.5);

    @media (max-width: 500px) {
        width: 0px;
    }
`
const Content = styled.main`
    background: ${props=> props.background || 'rgba(255,255,255, 0.75)'};
    margin-left: 0px;
    margin-right: 0px;
    min-height: 100vh;
    width: 100%;
`

export default layout
