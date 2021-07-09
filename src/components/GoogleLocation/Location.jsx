import React from 'react';
import { GoogleMap, useJsApiLoader, InfoWindow, Marker } from '@react-google-maps/api';

const containerStyle = {
    margin: '65.5px',
    width: '500px',
    height: '500px'
};
  
const center = {
  lat: 36.230176, 
  lng: -119.330401
};

const GoogleLocation = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDjj_--_dtK3yruOYaGzL8RYdOTQRiiToE"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */
          <Marker 
              position={{lat: 36.230176, lng: -119.330401}}
          >
              <InfoWindow>
                  <div>1132 Leland Ave, Tulare, CA, 93274</div>
              </InfoWindow>
          </Marker>
        }

        <></>
      </GoogleMap>
  ) : <></>
}
  
  export default React.memo(GoogleLocation)
