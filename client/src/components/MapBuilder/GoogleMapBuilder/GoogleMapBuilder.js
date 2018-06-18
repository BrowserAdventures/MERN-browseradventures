import React from 'react'
import {compose, withProps} from "recompose"
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps"

import KEYS from '../../../config/keys'

const googleMapBuilder=(props)=>
{
    const marker = props.isMarkerShown && <Marker
        position={{lat: props.coord.lat, lng: props.coord.lon }}
        onClick={props.onMarkerClick}
    />

    return(<GoogleMap
        defaultZoom={10}
        defaultCenter={{lat: props.coord.lat, lng: props.coord.lon}}
    >
        {marker}
    </GoogleMap>)
}

const googleMapProps = {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${KEYS.googleMap}&callback=initMap`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `100%` }} />,
    mapElement: <div style={{ height: `100%`}} />,
}


export default compose(withProps(googleMapProps),
    withScriptjs,
    withGoogleMap
)(googleMapBuilder)
