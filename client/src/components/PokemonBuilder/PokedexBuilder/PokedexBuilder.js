import React, {Fragment} from 'react'
import styled from 'styled-components'
import {Wrapper} from '../../styles/styles'
import Arrow from '../../../assets/imgs/HeaderImages/dropdown_arrow.png'


const pokedexBuilder=(props)=>
{
    let types, stats, abilities, bodyMetrics, pokedexDisplay

    if(props.pokemonStats.stats !== undefined)
    {
        stats = props.pokemonStats.stats.map((self, i)=> (<Bar
            key={i}
            width={self.base_stat}>
                <div>{self.stat.name}</div>
                <div>{self.base_stat}</div>
        </Bar>))

        abilities = props.pokemonStats.abilities.map((self, i)=> (<Wrapper key={i}
            margin='0px 30px' justifyContent='space-between' width='85%'>
                <div style={{color: '#44bd32'}}>Ability: </div>
                <div style={{color: '#44bd32'}}>{self.ability.name}</div>
        </Wrapper>))

        types = props.pokemonStats.types.map((self, i)=> (<Wrapper key={i}
            margin='0px 30px' justifyContent='space-between' width='85%'>
            <div style={{color: '#44bd32'}}>Type: </div>
            <div style={{color: '#44bd32'}}>{self.type.name}</div>
        </Wrapper>))

        bodyMetrics = <Fragment>
            <Wrapper margin='0px 30px' justifyContent='space-between' width='85%'>
                <div style={{color: '#44bd32'}}>Height: </div>
                <div style={{color: '#44bd32'}}>{props.pokemonStats.height}</div>
            </Wrapper>
            <Wrapper margin='0px 30px' justifyContent='space-between' width='85%'>
                <div style={{color: '#44bd32'}}>Weight: </div>
                <div style={{color: '#44bd32'}}>{props.pokemonStats.weight}</div>
            </Wrapper>
        </Fragment>
    }

    switch(props.display)
    {
        case('stats'):
            pokedexDisplay = stats
        break
        case('traits'):
            pokedexDisplay = [abilities, types, bodyMetrics]
        break

        default: return pokedexDisplay;
    }


    return(<Container>

        <Grid>
            {props.children}
            {pokedexDisplay}
        </Grid>
        <Button>
            <div onClick={()=> props.backButton('traits')}>
                <img src={Arrow} alt=''/>
            </div>
            <div onClick={()=> props.nextButton('stats')}>
                <img src={Arrow} alt=''/>
            </div>
        </Button>

    </Container>)
}

const Container = styled.div`
    background: #cd6133;
    width: 400px;
    padding: 20px;
    border: 1px solid black;
    border-radius: 7px;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 1px 0 rgba(0,0,0, 0.4);
`
const Button = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;

    div {
        width: 75px;
        height: 75px;
        background: #0652DD;
        margin: 20px;
        border-radius: 90px;
        border: 1px solid rgba(0,0,0, 0.4);

        img {
            width: 100%;
            height: 100%;
        }

        :active {
            background: green;
        }
    }
    div:nth-child(odd) {
        transform: rotate(90deg);
    }
    div:nth-child(even) {
        transform: rotate(-90deg);
    }
`

const Grid = styled.div`
    display: grid;
    height: 400px;
    margin-bottom: 20px;
    grid-template-rows: repeat(6, 1fr);
    grid-template-columns: 1fr;
    padding: 20px;
    padding-top: 10px;
    border: 1px solid #e84118;
    border-radius: 7px;
    grid-gap: 5px;
    background: black;
`

const Bar = styled.div`
    display: flex;
    height: 35px;
    border: 1px solid black;
    text-align: center;

    div:nth-child(odd) {
        background: rgba(0,255,0, 0.6);
        border-right: 1px solid black;
        width: 75px;
        align-content: center;
    }

    div:nth-child(even) {
        background: rgba(255,255,255, 0.3);
        border-right: 1px solid black;
        width: ${props=> props.width/1.75}%;
    }
`




export default pokedexBuilder
