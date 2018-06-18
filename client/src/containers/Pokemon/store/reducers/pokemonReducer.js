import * as types from '../types/types'

const initialState =
{
    pokemons: [],
    displayedPokemons: [],
    pokemon: {},
    pokemonStats: [],
    pokemonTerm: '',
    pokedexScreen: 'traits',
    isFetched: false,
    showModal: false,
}

const pokemonReducer=(state = initialState, action)=>
{
    switch(action.type)
    {
        case(types.OPEN_CLOSE_MODAL):
        return{
            ...state,
            showModal: !state.showModal,
        }

        case(types.REQUEST_POKEMONS):
        return{
            ...state,
            isFetched: true,
        }

        case(types.RECEIVE_POKEMONS):
            let pokemons = action.pokemons.map(pokemon=> {
                let {url} = pokemon
                pokemon.id = url.substring(34, url.length - 1)

                return pokemon
            })
        return{
            ...state,
            pokemons: pokemons,
            displayedPokemons: pokemons.slice(0, 200),
            isFetched: false,
        }

        case(types.FILTER_POKEMONS):
            let displayedPokemons = state.pokemons.filter(pokemon=> {
                if(pokemon.name.includes(action.searchTerm.toLowerCase()))
                    return true
                return false
            }).slice(0, 200)

        return{
            ...state,
            displayedPokemons: displayedPokemons
        }

        case(types.SEND_POKEMON_CARD):
        return{
            ...state,
            pokemon: action.pokemon,
        }

        case(types.RECEIVE_POKEMON_STATS):
        return{
            ...state,
            pokemonStats: action.pokemonStats,
            stats: action.stats,
            isFetched: false,
        }

        case(types.POKEDEX_SCREEN):
        return{
            ...state,
            pokedexScreen: action.page
        }

        case(types.SET_POKEDEX_PAGE):
        return{
            ...state,
            pokedexScreen: 'traits'
        }

        default: return state
    }
}



export default pokemonReducer
