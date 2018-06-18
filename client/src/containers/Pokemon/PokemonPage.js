import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import * as actions from './store/actions/pokemonActions'
import * as types from './store/types/types'

import HeaderFlip from '../../components/UI/Header/HeaderFlip'
import Modal from '../../components/UI/Modal/Modal'
import LoadingAnimation from '../../components/UI/LoadingAnimation/LoadingAnimation'

import PokemonPageBuilder from '../../components/PokemonBuilder/PokemonPageBuilder'
import SearchPokemon from '../../components/PokemonBuilder/SearchPokemon'


class PokemonPage extends Component
{
    componentWillMount()
    {
        this.props.fetchPokemons()
    }

    openPokemon=(pokemon)=> {
        this.props.openPokemon(pokemon)
        this.props.history.push('/pokedex')
    }

    render()
    {
        const {
            displayedPokemons, isFetched, showModal, openCloseModal,
            searchPokemon,
        } = this.props

        const showPokemons = isFetched ?
            <LoadingAnimation /> :
            <PokemonPageBuilder
                pokemons={displayedPokemons}
                open={this.openPokemon}
            />

        return(<Fragment>
            <HeaderFlip
                title='Pokemon Page' instructions='Search for a Pokemon?'
                click={openCloseModal}
                backButton={()=> this.props.history.push('/')}
            />
            <Modal show={showModal} close={openCloseModal}>
                <SearchPokemon onChange={searchPokemon} />
            </Modal>
            <ul>{showPokemons}</ul>
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    const {
        pokemons, displayedPokemons, isFetched, showModal, searchTerm,
    } = state.pokemonReducer

    return{
        pokemons: pokemons,
        displayedPokemons: displayedPokemons,
        isFetched: isFetched,
        showModal: showModal,
        searchTerm: searchTerm,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        openCloseModal: ()=> dispatch({type: types.OPEN_CLOSE_MODAL}),
        fetchPokemons: ()=> dispatch(actions.fetchPokemons()),
        openPokemon: (pokemon)=> dispatch({
            type: types.SEND_POKEMON_CARD,
            pokemon: pokemon
        }),
        searchPokemon: (input)=> dispatch({
            type: types.FILTER_POKEMONS,
            searchTerm: input
        }),
    }
}





export default connect(mapStateToProps, mapDispatchToProps)(PokemonPage)
