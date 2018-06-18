import React, {Component} from 'react'
import {Route, Switch, withRouter} from 'react-router-dom'

import Layout from './components/Layout/Layout'
import Home from './containers/Home/Home'
import Account from './containers/Account/Account'

import Games from './containers/Games/Games'
import PictureBook from './containers/PictureBook/PictureBook'
import BookPage from './containers/PictureBook/BookPage/BookPage'
import WeatherMap from './containers/WeatherMap/WeatherMap'
import PokemonPage from './containers/Pokemon/PokemonPage'
import Pokedex from './containers/Pokemon/Pokedex'
import ParticleSystem1 from './containers/ParticleSystems/ParticleSystem1'
import Login from './containers/Account/Login/Login'
import Register from './containers/Account/Register/Register'
import LiveChat from './containers/LiveChat/LiveChat'


class App extends Component
{
    render()
    {
        return(<Layout>
            <Switch>
                <Route path="/picturebook" component={PictureBook} />
                <Route path="/bookpage" component={BookPage} />

                <Route path="/weathermap" component={WeatherMap} />

                <Route path="/games" component={Games} />

                <Route path="/account" component={Account} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

                <Route path="/livechat" component={LiveChat} />

                <Route path="/pokemonpage" component={PokemonPage} />
                <Route path="/pokedex" component={Pokedex} />

                <Route path="/particlesystem1" component={ParticleSystem1} />

                <Route path='/bird-poo' component={()=> window.location = 'http://browseradventures.com/bird%20poo/'}/>
                <Route path='/archer' component={()=> window.location = 'http://browseradventures.com/archer/'}/>
                <Route path='/lasers' component={()=> window.location = 'http://browseradventures.com/ExplodingLasers/'}/>
                <Route path='/wizard' component={()=> window.location = 'http://browseradventures.com/Wizard_platformer/'}/>
                <Route path='/shooter' component={()=> window.location = 'http://browseradventures.com/shooter/'}/>

                <Route path="/" component={Home} />
              </Switch>
        </Layout>)
    }
}




export default withRouter(App)
