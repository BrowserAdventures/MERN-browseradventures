import React from 'react'
import styled from 'styled-components'


const backdrop = (props) =>(
    props.show && <Wrapper show={props.show} onClick={props.close} />
)


const Wrapper = styled.div`
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.7);
`



export default backdrop
