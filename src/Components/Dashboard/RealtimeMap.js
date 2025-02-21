// src/components/RealTimeMap.js
import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const RealtimeMap = () => {
  const [busLocations, setBusLocations] = useState([
    { id: 1, name: 'Bus 1', lat: 37.7749, lng: -122.4194 },
    { id: 2, name: 'Bus 2', lat: 37.7849, lng: -122.4294 },
  ]);
  const customIcon = new L.Icon({
    iconUrl: '../Images/bus1.png', // Path to your custom image
    iconSize: [32, 32], // Set the size of the icon
    iconAnchor: [16, 32], // Set the anchor point of the icon (where the marker is positioned)
    popupAnchor: [0, -32], // Set the anchor point for the popup
  });

  return (
    <MapContainer center={[37.7749, -122.4194]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {busLocations.map((bus) => (
        <Marker  icon={customIcon} key={bus.id} position={[bus.lat, bus.lng]}>
          <Popup>{bus.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default RealtimeMap;