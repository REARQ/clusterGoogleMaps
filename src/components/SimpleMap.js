import React, { useCallback, useState } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Overlay from "./Overlay";

const containerStyle = {
  width: "900px",
  height: "600px",
  margin: "auto",
};

const center = {
  lat: 57.835416128751666,
  lng: 12.994002083323961,
};
const SimpleMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.REACT_APP_googleMapsApiKey,
  });

  const [theMap, setTheMap] = useState(null);
  const [theBounds, setTheBounds] = useState(null);
  const [theZoom, setTheZoom] = useState(null);

  const onBoundChange = useCallback(
    function callback(zoom) {
      if (theMap) {
        const bounds = theMap.getBounds();

        const myBounds = [
          bounds.getSouthWest().lng(),
          bounds.getSouthWest().lat(),
          bounds.getNorthEast().lng(),
          bounds.getNorthEast().lat(),
        ];

        setTheBounds(myBounds);
        setTheZoom(theMap.zoom);
      }
    },
    [theMap]
  );

  const onLoad = useCallback(function callback(map) {
    setTheMap(map);
  }, []);

  return (
    // <LoadScript
    //   googleMapsApiKey={ process.env.REACT_APP_googleMapsApiKey}
    // >
    isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onBoundsChanged={onBoundChange}
        onLoad={onLoad}
      >
        <Overlay bounds={theBounds} zoom={theZoom} />
        {/* <Markers/> */}

        {/* <Cluster/> */}
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    ) : (
      <></>
    )
    // </LoadScript>
  );
};
export default SimpleMap;
