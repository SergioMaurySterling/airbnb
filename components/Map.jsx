import ReactMapGL from 'react-map-gl';
import { useState } from 'react';
import getCenter from 'geolib/es/getCenter';

function Map({searchResults}) {

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

    </ReactMapGL>
  )
}

export default Map
