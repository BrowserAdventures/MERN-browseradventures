import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

import {images} from '../../assets/imgs/HomePageImages'
import {Wrapper} from '../../components/styles/styles'

import ParticleSystemHeader from '../ParticleSystems/ParticleSystemHeader'
import Header from '../../components/UI/Header/Header'
import HomePageBuilder from '../../components/HomePageBuilder/HomePageBuilder'
import Modal from '../../components/UI/Modal/Modal'
import AccountHandler from '../../components/AccountBuilder/AccountHandler'


class Home extends Component
{
    state = {
        modal: false,
        openLiveChat: false,
    }

    openPage=(pathname)=>
    {
        this.props.history.push(`/${pathname}`)
    }

    authenticatedUserPageOpener=(pathname)=>
    {
        if(this.props.isAuthenticated) return this.props.history.push(`/${pathname}`)

        this.setState({modal: true})
    }

    render()
    {
        return(<Fragment>
            <ParticleSystemHeader />
            <Header title='BrowserAdventrues' />

            <Modal show={this.state.modal} close={()=> this.setState({modal:false})}>
                <Wrapper>
                    <h3>Log in please to access page.</h3>
                    <AccountHandler login open={this.openPage} />
                    <AccountHandler open={this.openPage} />
                </Wrapper>
            </Modal>

            <HomePageBuilder
                title='Live Chat'
                pathname='livechat'
                open={this.authenticatedUserPageOpener}
                instructions='Chat with other users live!'
                image='http://ofthebox.org/wp-content/uploads/2018/02/First-Signs-of-Weird-Quantum-Property-of-Empty-Space-600x315.jpg'
            />
            <HomePageBuilder
                title='Weather Map'
                pathname='weathermap'
                open={this.openPage}
                instructions='click header to look up a city on GoogleMap and see the current weather'
                image={images['googleMap.png']}
            />
            <HomePageBuilder
                title='Picture Book'
                pathname='picturebook'
                open={this.openPage}
                instructions='click header to upload an image and create descriptions'
                image='https://2qibqm39xjt6q46gf1rwo2g1-wpengine.netdna-ssl.com/wp-content/uploads/2017/11/9334561_web1_m-ibm-edh-171111.jpg'
            />
            <HomePageBuilder
                title='Pokedex'
                pathname='pokemonpage'
                open={this.openPage}
                instructions='click header to search for a pokemon and select it to get pokedex!'
                image={images['pokemon.png']}
            />
            <HomePageBuilder
                title='Particle Systems'
                pathname='particlesystem1'
                open={this.openPage}
                instructions='play with different particle systems by flipping through the pages'
                image={images['particleSystem.png']}
            />
        </Fragment>)
    }
}

const mapStateToProps=(state)=>
{
    return{
        isAuthenticated: state.loginReducer.isAuthenticated,
    }
}

export default connect(mapStateToProps)(Home)
