import React from 'react'
import styled from 'styled-components'

import NavItem from './NavItem/NavItem'


const navigation=(props)=> (<Navigation>

    <NavItem to='/games'>Games</NavItem>
    <NavItem to='/account'>Account</NavItem>

</Navigation>)


const Navigation = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-flow: row;
    align-items: center;
    height: 100%;
`

export default navigation
