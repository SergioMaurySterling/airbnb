/* eslint-disable @next/next/no-img-element */
import ReactMapGL, { Marker,Popup } from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter';
import requi from '../images/requi.png'

function Map({searchResults}) {

  const [selectedLocation, setSelectedLocation] = useState({});

  // Transfor searchResults object into {latitude:..., longitude:...} object
  const coordinates = searchResults.map(result => ({
    "latitude": result.lat,
    "longitud": result.long
  }))

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: coordinates[0].latitude,
    longitude: coordinates[0].longitude,
    zoom: 11
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sams081/ckx3abukn09mf14mu1juw7w3l"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map(result => (
        <div key={result.long}>
          <Marker
              longitude={result.long}
              latitude={result.lat}
              offsetLeft={-20}
              offsetTop={-10}
          >
            <img onClick={() => setSelectedLocation(result)} 
            className='cursor-pointer w-10 h-10 rounded animate-bounce'
            aria-label="push-pin" 
            src="https://firebasestorage.googleapis.com/v0/b/petti-2d60d.appspot.com/o/Home%2Frequi.png?alt=media&token=37e1b38a-760c-4b6a-8fd5-ac90e49e55ab" 
            alt='Requi logo'></img>
          </Marker>
          {/* Pop up name */}
          {selectedLocation.long === result.long ? (
            <Popup onClose={()=>setSelectedLocation({})} latitude={result.lat} longitude={result.long} closeOnClick={true} >{result.title}</Popup>
          ):(false)}
        </div>
      ))}
    </ReactMapGL>
  )
}

export default Map