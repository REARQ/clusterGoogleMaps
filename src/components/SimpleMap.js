import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import Overlay from './Overlay';
import Markers from './Markers';
import Cluster from './Cluster';

const containerStyle = {
  width: '900px',
  height: '600px',
  margin: "auto"
};

const center = {
  lat: 57.735416128751666,
  lng: 11.994002083323961
};
const SimpleMap = () => {

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey
  });

    return (
      // <LoadScript
      //   googleMapsApiKey={ process.env.REACT_APP_googleMapsApiKey}
      // >
      isLoaded ?
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
        >
          <Overlay/>
          <Markers/>
          
          <Cluster/>
          { /* Child components, such as markers, info windows, etc. */ }
          <></>
        </GoogleMap>
       
        : <></>
      // </LoadScript>
    )

}
export default SimpleMap;