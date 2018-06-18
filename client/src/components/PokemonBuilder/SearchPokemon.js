import React from 'react'
import {Wrapper} from '../styles/styles'

const searchPokemon=(props)=> (

    <Wrapper margin='20px' direction='column' width='200px'>
        <h3>Look up a pokemon!</h3>
        <input
            type="text"
            onChange={(E)=> props.onChange(E.target.value)}
            placeholder="Enter pokemon name..."
        />
    </Wrapper>
)



export default searchPokemon
