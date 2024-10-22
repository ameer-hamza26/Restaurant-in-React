import React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "300px",
  width: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const MyMapComponent = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDPcUO-unkTNVQn65_LA15tYoOlaio_KRQ">
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={10}>
        {/* Additional components like markers can go here */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MyMapComponent;
