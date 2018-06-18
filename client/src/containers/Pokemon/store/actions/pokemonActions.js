import * as types from '../types/types'

const requestPokemons=()=>
{
    return{
        type: types.REQUEST_POKEMONS
    }
}

const receivePokemons=(json)=>
{
    return{
        type: types.RECEIVE_POKEMONS,
        pokemons: json.results
    }
}

export const fetchPokemons=()=>
{
    return dispatch=> {
        dispatch(requestPokemons())

        return fetch(`https://pokeapi.co/api/v2/pokemon/?limit=200`)
            .then(response => response.json())
            .then(json => dispatch(receivePokemons(json)))
    }
}

const receivePokemonStats=(json)=>
{
    return{
        type: types.RECEIVE_POKEMON_STATS,
        pokemonStats: {
            types: json.types,
            height: json.height,
            weight: json.weight,
            stats: json.stats,
            abilities: json.abilities
        },
    }
}

export const fetchPokemonStats=(id)=>
{
    return dispatch=> {
        dispatch(requestPokemons())

        return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(response => response.json())
            .then(json => dispatch(receivePokemonStats(json)))
    }
}
