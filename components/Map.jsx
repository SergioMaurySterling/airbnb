import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

function Map() {

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/sams081/ckx3abukn09mf14mu1juw7w3l"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
    >

    </ReactMapGL>
  )
}

export default Map
