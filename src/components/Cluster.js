import { Marker, MarkerClusterer, useGoogleMap } from "@react-google-maps/api";
import { useEffect } from "react";

const Cluster = () => {
  const map = useGoogleMap();

  // list of the marker object along with icon
  const locations = [
    { lat: 58.29811, lng: 18.9009393 },
    { lat: 58.2980245, lng: 18.9971503 },
    { lat: 58.2981078, lng: 18.9980875 },
    { lat: 58.29813638, lng: 18.9917639 },
  ];

  // new MarkerClusterer(map, markerList);

  // useEffect(() => {
  //   var bounds = new window.google.maps.LatLngBounds();
  //   markerList.map(x => {
  //     const marker = createMarker(x);
  //     bounds.extend(marker.position);
  //   });
  //   map.fitBounds(bounds); // the map to contain all markers
  // }, []);

  // // create marker on google map
  // const createMarker = (markerObj) => new window.google.maps.Marker({
  //   position: { lat: markerObj.lat, lng: markerObj.lng },
  //   map: map,
  //   icon: {
  //     url: markerObj.icon,
  //     // set marker width and height
  //     scaledSize: new window.google.maps.Size(50, 50)
  //   }
  // });

  const options = {
    imagePath:
      './markerclusterer/m', // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
  }
  
  return(
  <MarkerClusterer  options={options}>
    {(clusterer) =>
      locations.map((location) => (
        <Marker key={location.lat} position={location}  clusterer={clusterer} />
      ))
    }
  </MarkerClusterer>
  )
};

export default Cluster;
