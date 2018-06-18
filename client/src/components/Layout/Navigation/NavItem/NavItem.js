import React from 'react'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

const navItem=(props)=> (<NavItem>
    <NavLink
        to={props.to}
        exact={props.exact}
        activeStyle={{color: '#44bd32'}}
        {...props}
    />
</NavItem>)


const NavItem = styled.li`
    box-sizing: border-box;
    display: block;
    width: 100%;

    a {
        color: white;
        text-decoration: none;
        width: 100%;
        box-sizing: border-box;
        display: block;
        padding: 20px 10px;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
    }


    a:hover {
        cursor: pointer;
        background: rgba(255,255,255, 0.3);
        border-left: 1px solid white;
        border-right: 1px solid white;
    }
    a:active {
        color: black;
    }

`


export default navItem
