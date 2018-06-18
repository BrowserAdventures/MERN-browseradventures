import React from 'react'
import styled from 'styled-components'



const weatherForm=(props)=>
{
    return(<Form onSubmit={props.submit}>
        <h3>Look up Weather</h3>
        <label>City Name</label>
        <input
            type='input'
            name='city'
            placeholder='enter a city name...'
        />
        <label>Country Name</label>
        <input
            type='input'
            name='country'
            placeholder='enter a 2 digit country...'
        />
        <input type='submit' value='Submit' />
    </Form>)
}



const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 20px;
    width: 200px;
    text-align: center;

    input {
        margin-bottom: 20px;
        border: 1px solid rgba(0,0,0, 0.2);
    }
`



export default weatherForm
