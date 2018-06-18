import React, {Component, Fragment} from 'react'
import { connect } from 'react-redux'

import * as actions from './store/actions/pokemonActions'
import * as types from './store/types/types'

import LoadingAnimation from '../../components/UI/LoadingAnimation/LoadingAnimation'
import Header from '../../components/UI/Header/Header'
import {Wrapper} from '../../components/styles/styles'

import PokemonCube from '../../components/PokemonBuilder/PokedexBuilder/PokemonCube'
import PokedexBuilder from '../../components/PokemonBuilder/PokedexBuilder/PokedexBuilder'


class Pokedex extends Component
{
    componentWillMount()
    {
        this.props.fetchPokemonStats(this.props.pokemon.id)
        this.props.setPokedexPage()
    }

    render()
    {
        const {
            pokemonStats, isFetched, pokedexScreen, changePokedexDisplay,
        } = this.props

        const pokedex = isFetched ? <LoadingAnimation /> :
        <Wrapper>
            <PokedexBuilder
                pokemonStats={pokemonStats}
                display={pokedexScreen}
                backButton={changePokedexDisplay}
                nextButton={changePokedexDisplay}
            >
                <PokemonCube currentPokemon={this.props.pokemon} />
            </PokedexBuilder>
        </Wrapper>


        return(<Fragment>
            <Header
                title={this.props.pokemon.name}
                backButton={()=> this.props.history.push('/pokemonpage')}
            />
            {pokedex}
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    return{
        pokemon: state.pokemonReducer.pokemon,
        pokemonStats: state.pokemonReducer.pokemonStats,
        isFetched: state.pokemonReducer.isFetched,
        pokedexScreen: state.pokemonReducer.pokedexScreen,
    }
}

const mapDispatchToProps=(dispatch)=>
{
    return{
        fetchPokemonStats: (id)=> dispatch(actions.fetchPokemonStats(id)),
        changePokedexDisplay: (page)=> dispatch({
            type: types.POKEDEX_SCREEN,
            page: page
        }),
        setPokedexPage: ()=> dispatch({type: types.SET_POKEDEX_PAGE})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokedex)
