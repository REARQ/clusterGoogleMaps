import React from "react";
import {
  MarkerClusterer,
  OverlayView,
  useGoogleMap,
} from "@react-google-maps/api";

const Overlay = () => {
  const map = useGoogleMap();

  const locations = [
    { lat: 57.835416128751666, lng: 12.994002083323961 },
    { lat: 57.93542, lng: 12.8945 },
  ];

  const options = {
    imagePath: "./markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  };
  return map ? (
    <>
      <MarkerClusterer options={options}>
        {(clusterer) =>
          locations.map((location) => (
            <OverlayView
              mapPaneName={OverlayView.MAP_PANE}
              key={location.lat}
              setMap={map}
              getPosition={location}
              position={location}
              clusterer={clusterer}
            >
              <span style={{ fontSize: "40px" }}>😎</span>
            </OverlayView>
          ))
        }
      </MarkerClusterer>
      <OverlayView
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        position={{
          lat: 57.735416128751666,
          lng: 11.994002083323961,
        }}
      >
        <span style={{ fontSize: "40px" }}>😎</span>
      </OverlayView>
      <OverlayView
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        position={{
          lat: 57.73542,
          lng: 11.8945,
        }}
      >
        <span style={{ fontSize: "40px" }}>😎</span>
      </OverlayView>
    </>
  ) : (
    <></>
  );
};

export default Overlay;
