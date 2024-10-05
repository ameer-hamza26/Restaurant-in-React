import React, { useRef } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const ReactApi = () => {
    const mapRef = useRef();

  return (
    <div>
      {/* Your contact form fields */}
      <LoadScript
        googleMapsApiKey={dauntless-karma-437621-m6}
        libraries={['places']}
      >
        <GoogleMap
          mapContainerClassName="map-container"
          center={{lat: 47.650,lng: -122.350}} // Replace with your desired location
          zoom={15}
          ref={mapRef}
        />
      </LoadScript>
    </div>
  );
}

export default ReactApi
