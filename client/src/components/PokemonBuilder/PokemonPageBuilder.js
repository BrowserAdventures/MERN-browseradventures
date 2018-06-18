import React from 'react'
import styled from 'styled-components'


const pokemonBuilder=(props)=>
{
    const pokemons = props.pokemons.map((pokemon, i)=> {
        const imgURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`

        return(
        <PokemonItems key={i} onClick={()=> props.open(pokemon)}>
            <PokemonSprites img={imgURL} />
            <PokemonNames>{pokemon.name}</PokemonNames>
        </PokemonItems>)
    })

    return pokemons
}


const PokemonItems = styled.li`
    position: relative;
    display: inline-flex;
    overflow: hidden;
    margin: 10px;
    width: 140px;
    height: 140px;
    cursor: pointer;

    @media (min-width: 992px) {
        width: 160px;
        height: 160px;
    }

`
const PokemonSprites = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 10;
    border: none;
    background: url(${props=> props.img});
    background-color: transparent;
    background-position: center center;
    background-repeat: no-repeat;
    width: 140px;
    height: 140px;

    :hover {
        background-color: rgba(255,255,255, 0.2);
    }
    @media (min-width: 992px) {
        width: 160px;
        height: 160px;
    }
`
const PokemonNames = styled.p`
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 20;
    margin: 0;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    text-align: center;
    font-size: 14px;
    pointer-events: none;
`



export default pokemonBuilder
