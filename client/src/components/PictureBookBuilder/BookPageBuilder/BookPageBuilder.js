import React from 'react'
import styled from 'styled-components'

const bookPageBuilder=(props)=>
{
    const descriptions = props.descriptions.filter(self=> (
        self.id !== 'title' && self.id !== 'url'
    )).map(self=> (
    <Container key={self.id}>
        <p>{self.description}</p>
        <div>
            <img
                src='http://downloadicons.net/sites/default/files/delete-button-icon-63568.png'
                alt=''
                onClick={()=> props.delete(self.id)}
            />
        </div>
    </Container>))

    return (<Wrapper>
        <Header>
            <img
                src={props.src}
                alt=''
            />
        </Header>
        {descriptions}
    </Wrapper>)
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`
const Header = styled.div`
    width: 100%
    background: rgba(0,0,0, 0.9);
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: -20px;
    padding: 20px 0px;

    img {
        max-height: 400px;
    }
`

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: rgba(255,255,255, 0.3);
    border-bottom: 1px solid rgba(0,0,0, 0.4);
    border-top: 2px solid rgba(0,0,0, 0.2);
    box-shadow: 1px 1px 1px 0px black;
    width: 300px;

    text-align: center;
    padding:  0 10px;
    margin-bottom: 20px;

    :hover {
        cursor: pointer;
        background: rgba(25, 255, 25, 0.4);
        border-bottom: 1px solid rgba(0,0,0, 0.4);
        border-top: 2px solid rgba(0,0,0, 0.1);
        box-shadow: 1px 1px 1px 0px transparent;
    }

    img {
        height: 50px;
        width: 50px;
        border: 1px solid transparent;
        border-radius: 90px;
    }
    img:hover {
        cursor: pointer;
        border: 1px solid red;
        border-radius: 90px;
    }

    div {
        height: 100%;
        color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(0,0,0, 0.3);
    }
`


export default bookPageBuilder
