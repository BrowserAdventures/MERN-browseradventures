import styled from 'styled-components'


export const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: ${props=> props.direction};
    justify-content: ${props=> props.justifyContent || 'center'};
    align-content: ${props=> props.alignContent || 'center'};
    width: ${props=> props.width || '100%'};
    height: ${props=> props.height}px;
    margin: ${props=> props.margin};
    background: ${props=> props.background};
`

export const FlexBasis = styled.div`
    display: flex;
    flex-basis: ${props=> props.basis}%;
    padding: ${props=> props.padding}px;

    @media (max-width: 500px) {
        width: ${props=> props.mediaWidth}px;
        padding: ${props=> props.padding/5}px;
    }
`

export const MapContainer = styled.div`
    flex-grow: 1;
    height: 100vh;
`

export const Titleh3 = styled.div`
    display: flex;
    text-align: center;
    max-height: ${props=> props.height};
    padding: 5px;

    h3 {
        display: flex;
        flex-direction: column;
        justify-content: center;
        background: rgba(255,255,255, 0.4);
        box-shadow: 1px 1px 1px 0px black;
    }

`
