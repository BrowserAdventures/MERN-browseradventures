import React, { Component, Fragment } from 'react'

import HeaderFlip from '../../components/UI/Header/HeaderFlip'
import Modal from '../../components/UI/Modal/Modal'
import {Wrapper, FlexBasis, MapContainer, Titleh3} from '../../components/styles/styles'
import GoogleMapBuilder from '../../components/MapBuilder/GoogleMapBuilder/GoogleMapBuilder'
import WeatherForm from '../../components/MapBuilder/WeatherBuilder/WeatherForm'
import WeatherDisplay from '../../components/MapBuilder/WeatherBuilder/WeatherDisplay'


class WeatherMap extends Component
{
    state = {
        temperature: '',
        city: 'Miami',
        country: 'US',
        humidity: '',
        description: '',
        showWeather: false,
        coord: {
            lat: 25.77, lon: -80.19
        },
        error: undefined,
    }

    componentWillMount()
    {
        this.setState({
            modal: false,
            marker: false,
        })
    }

    componentDidMount()
    {
        this.delayedShowMarker()
    }

    getWeather=(async)(E)=> {
        E.preventDefault()
        const city = E.target.elements.city.value
        const country = E.target.elements.country.value
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`)
        const data = await api_call.json()

        this.setState({
            temperature: data.main.temp,
            city: data.name,
            country: data.sys.country,
            humidity: data.main.humidity,
            description: data.weather[0].description,
            coord: data.coord,
            showWeather: true,
            modal: false,
        })
    }

    delayedShowMarker=()=> {
        setTimeout(() => {
            this.setState({marker: true })
        }, 3000)
    }

    handleMarkerClick=()=> {
        this.setState({marker: false })
        this.delayedShowMarker()
    }

    render()
    {
        const map = !this.state.modal && <GoogleMapBuilder
            isMarkerShown={this.state.marker}
            onMarkerClick={this.handleMarkerClick}
            coord={this.state.coord}
        />

        const weather = this.state.showWeather && !this.state.modal && (
            <WeatherDisplay data={this.state} />
        )

        const instructions = !this.state.showWeather && (<Titleh3 height='200px'>
            <h3>Click the header to search a city on the GoogleMap and get the current weather!</h3>
        </Titleh3>)

        return(<Fragment>
            <HeaderFlip noMargin
                title={this.state.city} instructions='Look up a city?'
                backButton={()=> this.props.history.push('/')}
                click={()=> this.setState({modal:true})}
            />
            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
                <WeatherForm submit={this.getWeather} />
            </Modal>
            <Wrapper>
                <FlexBasis basis='25' padding='20'>{[weather, instructions]}</FlexBasis>
                <MapContainer>{map}</MapContainer>
            </Wrapper>
        </Fragment>)
    }
}

const API_KEY = 'ec552f529b65a49792e789951518a724'


export default WeatherMap
