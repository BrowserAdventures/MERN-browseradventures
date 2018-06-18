import React from 'react'
import styled from 'styled-components'

const pictureBookBuilder=(props)=>
{
    const books = props.books.map(self=> (
    <Container key={self.id}>
        <span onClick={()=> props.open(self)}>
            <h3>{self.title}</h3>
            <img
                src={self.url}
                alt=''
            />
        </span>
        <div onClick={()=> props.delete(self.id)}>Delete</div>
    </Container>))

    return <Wrapper>{books}</Wrapper>
}

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
`

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: linear-gradient(217deg, rgba(255,0,0,.3), rgba(255,0,0,0) 70.71%),
            linear-gradient(127deg, rgba(0,255,0,.3), rgba(0,255,0,0) 70.71%),
            linear-gradient(336deg, rgba(0,0,255,.3), rgba(0,0,255,0) 70.71%);
    border-radius: 5px;
    border: 1px solid rgba(0,0,0, 0.7);
    width: 300px;
    height: 350px;
    text-align: center;
    padding:  0 10px;
    margin-bottom: 20px;

    @media (max-width: 500px) {
        width: 180px;
        height: 250px;
    }

    :hover {
        cursor: pointer;
        background: linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) 70.71%),
                linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%),
                linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%);
        border: 1px solid rgba(0,0,0, 1);
    }

    h3 {
        @media (max-width: 500px) {
            margin: 10px 0px;
        }
    }

    img {
        width: 90%;
        height: 250px;
        border: 5px solid rgba(0,0,0, 0.3);

        @media (max-width: 500px) {
            height: 175px;
        }
    }
    img:hover {
        cursor: pointer;
        border: 5px solid rgba(0,0,0, 0.6);
    }

    div {
        height: 40px;
        color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;

    }
    div:hover {
        color: red;
        cursor: pointer;
        background: rgba(0,0,0, 0.5);
    }
`


export default pictureBookBuilder
