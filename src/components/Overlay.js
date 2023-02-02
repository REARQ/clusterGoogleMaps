import React from "react";
import { OverlayView, useGoogleMap } from "@react-google-maps/api";
import useSupercluster from "use-supercluster";

// https://www.leighhalliday.com/google-maps-clustering
// https://github.com/leighhalliday/use-supercluster

const Overlay = (props) => {
  const map = useGoogleMap();


  // Simulate the vehicles/telemetry array
  const vehicles = [
    {
      id: "djb",
      heading: 52,
      lat: 57.735416128751666,
      lng: 11.994002083323961,
    },
    { id: "other", heading: 93, lat: 57.73542, lng: 11.8945 },
    {
      id: "Helena",
      heading: 52,
      lat: 60.735416128751666,
      lng: 11.994002083323961,
    },
    {
      id: "David",
      heading: 52,
      lat: 61.735416128751666,
      lng: 11.994002083323961,
    },
  ];

  const points = vehicles.map((vehicle) => ({
    type: "Feature",
    properties: {
      cluster: false,
      vehicleId: vehicle.id,
      heading: vehicle.heading,
    },
    geometry: {
      type: "Point",
      coordinates: [parseFloat(vehicle.lng), parseFloat(vehicle.lat)],
    },
  }));

  const { clusters, supercluster } = useSupercluster({
    points: points,
    bounds: props.bounds,
    zoom: props.zoom,
    options: { radius: 75, maxZoom: 20 },
  });

  return map ? (
    <>
      {clusters?.map((cluster) => {
        console.log("the cluster: ", cluster);
        const [longitude, latitude] = cluster.geometry.coordinates;
        const { cluster: isCluster, point_count: pointCount } =
          cluster.properties;

        return isCluster ? (
          <OverlayView
            key={`cluster-${cluster.id}`}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            position={{
              lat: latitude,
              lng: longitude,
            }}
          >
            <div
              style={{
                fontSize: `30px`
              }}
              onClick={() => {const expansionZoom = Math.min(supercluster.getClusterExpansionZoom(cluster.id), 20)
                map.setZoom(expansionZoom);
                map.panTo({lat: latitude, lng: longitude});
            }}
            >
              🤖{pointCount}
            </div>
          </OverlayView>
        ) : (
          <OverlayView
            key={`crime-${cluster.properties.vehicleId}`}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            position={{
              lat: latitude,
              lng: longitude,
            }}
          >
            <span style={{ fontSize: "40px" }}>
              😎{cluster.properties.vehicleId} - {cluster.properties.heading}
            </span>
          </OverlayView>
        );
      })}
      {/* <OverlayView
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        position={{
          lat: 57.735416128751666,
          lng: 11.994002083323961,
        }}
      >
        <span style={{ fontSize: "40px" }}>2😎</span>
      </OverlayView>
      <OverlayView
        mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
        position={{
          lat: 57.73542,
          lng: 11.8945,
        }}
      >
        <span style={{ fontSize: "40px" }}>1😎</span>
      </OverlayView> */}
    </>
  ) : (
    <></>
  );
};

export default Overlay;
