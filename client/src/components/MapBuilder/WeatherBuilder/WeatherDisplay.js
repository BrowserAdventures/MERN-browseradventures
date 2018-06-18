import React from 'react'
import styled from 'styled-components'



const weatherDisplay=(props)=>
{
    const {temperature, city, country, humidity, description} = props.data

    return(<Wrapper>
        <div>Location:</div><div>{city}, {country}</div>
        <div>Temperature:</div><div>{temperature}f</div>
        <div>Humidity:</div><div>{humidity}%</div>
        <div>Description:</div><div>{description}</div>
    </Wrapper>)
}



const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 100px 1fr;
    grid-gap: 10px 0px;
    background: rgba(255,255,255, 0.0);
    padding-top: 10px;
    height: 200px;
    width: 100%;

    @media (max-width: 500px) {
        width: 100px;
        height: 150px;
        grid-template-columns: 1fr;
        grid-gap: 0px 0px;
    }

    div:nth-child(odd) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(255,255,255, 0.1);
        box-shadow: 1px 1px 1px 0px rgba(0,0,0, 0.5);
    }
    div:nth-child(even) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        background: rgba(255,255,255, 0.4);
        box-shadow: 1px 1px 1px 0px rgba(0,0,0, 0.5);

        @media (max-width: 500px) {
            margin-bottom: 10px;
        }
    }
`



export default weatherDisplay
