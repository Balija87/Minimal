import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { FaShoppingCart } from 'react-icons/fa';

const containerStyle = {
  width: '100%',
  height: '100vh',
};

const center = {
  lat: 43.22932966269259,
  lng: 19.719730056429455,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyA1UK1ITPrBftmTIp46pz1Xas0jKY8RSvA',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const handleCartClick = () => {
    const destination = `${center.lat},${center.lng}`;
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${destination}`,
      '_blank',
    );
  };

  return isLoaded ? (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        <Marker
          position={center}
          icon={{
            url:
              'data:image/svg+xml;charset=UTF-8,' +
              encodeURIComponent(
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" width="24px" height="24px"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zM7.82 14.18l.03-.03L6.4 9h11.2l-1.45 5.15c-.14.5-.62.85-1.15.85H8.96c-.53 0-1.01-.35-1.15-.85l-.03-.03-.96-3.32H4V7h1.38l1.45 5.15c.14.5.62.85 1.15.85h7.68c.53 0 1.01-.35 1.15-.85L19.62 7H21v2h-1.38l-1.45 5.15c-.14.5-.62.85-1.15.85H8.96c-.53 0-1.01-.35-1.15-.85L7.82 14.18z"/></svg>',
              ),
            scaledSize: new window.google.maps.Size(40, 40),
          }}
        />
      </GoogleMap>
      <FaShoppingCart
        onClick={handleCartClick}
        style={{ position: 'absolute', top: 10, right: 10, cursor: 'pointer' }}
      />
    </div>
  ) : (
    <></>
  );
};

export default Map;
