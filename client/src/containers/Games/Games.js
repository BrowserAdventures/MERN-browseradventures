import React, {Component, Fragment} from 'react'

import {images} from '../../assets/imgs/GameImages'
import ParticleSystemHeader from '../ParticleSystems/ParticleSystemHeader'
import Header from '../../components/UI/Header/Header'
import HomePageBuilder from '../../components/HomePageBuilder/HomePageBuilder'


class Games extends Component
{
    openPage=(pathname)=>
    {
        this.props.history.push(`/${pathname}`)
    }

    render()
    {
        return(<Fragment>
            <ParticleSystemHeader />
            <Header
                title='Games'
                backButton={()=> this.props.history.push('/')}
            />

            <HomePageBuilder
                title='bird poo'
                pathname='bird-poo'
                open={this.openPage}
                instructions='use arrow keys to move bird and use spacebar to poop on people!'
                image={images['birdpoo.png']}
            />
            <HomePageBuilder
                title='Exploding Lasers'
                pathname='lasers'
                open={this.openPage}
                instructions='use arrow keys to move and up arrow to shoot laser!'
                image={images['lasers.png']}
            />
            <HomePageBuilder
                title='skeleton archer'
                pathname='archer'
                open={this.openPage}
                instructions='use arrow keys to move and spacebar to shoot bow!'
                image={images['skeleton.png']}
            />
            <HomePageBuilder
                title='Wizard Platformer'
                pathname='wizard'
                open={this.openPage}
                instructions='use arrow keys to move and spacebar to cast firebolt!'
                image={images['wizard.png']}
            />
            <HomePageBuilder
                title='Square Shooter'
                pathname='shooter'
                open={this.openPage}
                instructions='use arrow keys to move and spacebar to shoot'
                image={images['shooter.png']}
            />
        </Fragment>)
    }
}


export default Games
