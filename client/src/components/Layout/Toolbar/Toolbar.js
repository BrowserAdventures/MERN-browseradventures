import React from 'react'
import styled from 'styled-components'

import Navigation from '../Navigation/Navigation'
import NavItem from '../Navigation/NavItem/NavItem'

const toolbar=(props)=> (<Header>
    <div>
    <NavItem to='/' exact>BrowserAdventures</NavItem>
    </div>
    <div>
        <Navigation />
    </div>
</Header>)

const Header = styled.header`
    height: 60px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(255,255,255, 0.2);
    box-shadow: 0px 4px rgba(0,0,0, 0.2);
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
`

export default toolbar
