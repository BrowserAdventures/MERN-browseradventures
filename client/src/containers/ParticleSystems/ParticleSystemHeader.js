import React, { Component } from 'react'


class Circle
{
    constructor(ctx, radius, x, y)
    {
        this.x = x;
        this.y = y;
        this.r = radius;
        this.vel = {x: 5, y: 5};
        this.color = "#0095DD";
        this.ctx = ctx
    }

    draw()
    {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.r, 0, Math.PI*2);
        this.ctx.strokeStyle = this.color;
        this.ctx.stroke();
        this.ctx.closePath();
    }


    get left() {
        return this.x - this.r;
    }
    get right() {
        return this.x + this.r;
    }
    get top() {
        return this.y - this.r;
    }
    get bottom() {
        return this.y + this.r;
    }
}


class Particle extends Circle
{
    constructor(ctx, player)
    {
        super(ctx, 2, player.x, player.y)
        this.counter = 0;
        this.numY = Math.floor(Math.random()*5) + 1;
        this.numY *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
        this.numX = Math.floor(Math.random()*5) + 1;
        this.numX *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
        this.vel = {
            x: this.numX,
            y: this.numY,
        }
    }

    init()
    {
        this.randomIncrement = Math.floor(Math.random()*3) + 1;
        this.counter += 1//this.randomIncrement;
        this.draw()
        this.move()
    }

    move()
    {
        this.x += this.vel.x;
        this.y += this.vel.y;
    }
}

class Player extends Circle
{
    constructor(ctx, canvas, W, H)
    {
        super(ctx, 10, W/2, H/2)
        this.W = W;
        this.H = H;
        this.canvas = canvas;

        this.mouseMouse()
    }

    mouseMouse=()=> document.onmousemove=(E)=>
    {
        const mouse = {
            x: E.clientX - this.canvas.offsetLeft,
            y: E.clientY - this.canvas.offsetLeft
        }

        if(mouse.x > 0 && mouse.x < this.W
        && mouse.y > 0 && mouse.y < this.H)
        {
            this.x = mouse.x ;
            this.y = mouse.y ;
        }
    }
}


class ParticleSystemHeader extends Component
{
    constructor()
    {
        super()
        this.canvas = document.getElementById('canvas')
        this.ctx = this.canvas.getContext('2d');
        this.W = this.canvas.width = window.innerWidth;
        this.H = this.canvas.height = 60;
    }

    componentWillMount()
    {
        this.particles1 = []
        this.particles2 = []
        this.player = new Player(this.ctx, this.canvas, this.W, this.H)

        for(var i = 0; i < 50; i++) {
            this.particles1[i] = new Particle(this.ctx, this.player)
        }

        for( i = 0; i < 100; i++) {
            this.particles2[i] = new Particle(this.ctx, this.player)
        }
    }


    update=(DT)=>
    {
        this.player.draw()

        for(var i = 0; i < this.particles1.length; i++)
        {
            this.particles1[i].init(DT)
            this.particles1[i].r = 4;
            if(this.boundaryDelete(this.particles1[i])) {
                var randomColor = Math.floor(Math.random()*255) + 1;
                this.particles1[i].color = `rgba(255,${randomColor},25)`
                this.particles1[i].vel.x = -this.particles1[i].vel.x;
                this.particles1[i].vel.y = -this.particles1[i].vel.y

                if(this.particles1[i].counter > 100) {
                    this.particles1.splice(i, 1)
                    this.particles1.push(new Particle(this.ctx, this.player))
                }
            }
        }

        for(i = 0; i < this.particles2.length; i++)
        {
            this.particles2[i].init(DT)
            this.boundaryDetectionGravity(this.particles2[i])
            if(this.boundaryDelete(this.particles2[i]) && this.particles2[i].counter > 5) {
                this.particles2.splice(i, 1)
                this.particles2.push(new Particle(this.ctx, this.player))
            }
        }
    }

    boundaryDelete=(id)=>
    {
        return id.left <= 0
            || id.right >= this.W
            || id.top <= 0
            || id.bottom >= this.H
    }

    boundaryDetection=(id)=>
    {
        id.left < 0 || id.right > this.W ?
            id.vel.x = -id.vel.x :
            id.vel.x = id.vel.x
        ;

        id.top <= 0 || id.bottom > this.H ?
            id.vel.y = -id.vel.y:
            id.vel.y = id.vel.y
        ;
    }

    boundaryDetectionGravity=(id)=>
    {
        var randomNum = Math.floor(Math.random()*(0.9 -0)+0);
         //randomNum *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        var randomColor = Math.floor(Math.random()*255) + 1;

        id.left < 0 || id.right > this.W ?
            id.vel.x = -id.vel.x :
            id.vel.x = id.vel.x
        ;

        if(id.top <= 0) {
            id.vel.y *= -0.9;
            id.vel.x *= 0.9;
            id.y = 0+id.r;
            id.r = 1;
            id.color = `rgba(${randomColor},${randomColor},255)`
        }
        if(id.bottom >= this.H) {
            id.vel.y *= -0.9;
            id.vel.x *= this.plusMinus(randomNum);
            id.y = this.H-id.r;
            id.r = 2;
            id.color = `rgba(${randomColor},${randomColor},255)`
        }


        id.vel.y += 0.5
    }

    plusMinus=(number)=>
    {
        return number *= Math.floor(Math.random()*2) === 1 ? 1 : -1;
    }

    componentDidMount(lastTime)
    {
        const callback=(Mseconds)=> {
            this.ctx.clearRect(0, 0, this.W, this.H);
            if(lastTime)
                this.update((Mseconds -lastTime)/1000);
            lastTime = Mseconds;
            requestAnimationFrame(callback);
        }
        callback();
    }

    render()
    {
        return <div />
    }
}


export default ParticleSystemHeader
