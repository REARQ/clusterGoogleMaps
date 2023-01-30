import React from "react";
import { OverlayView, useGoogleMap } from "@react-google-maps/api";

const Overlay = () => {
  const map = useGoogleMap();
  return (
    map ?
    <>
    <OverlayView
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      position={{
        lat: 57.735416128751666,
        lng: 11.994002083323961,
      }}
    >
     <span style={{fontSize: "40px"}}>😎</span>
    </OverlayView>
    <OverlayView
      mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
      position={{
        lat: 57.73542,
        lng: 11.8945,
      }}
    >
     <span style={{fontSize: "40px"}}>😎</span>
    </OverlayView>
    </>
    :
    <></>
  );
};

export default Overlay;
