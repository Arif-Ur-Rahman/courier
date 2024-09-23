// CoverageMap.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Define an icon for the markers
const customIcon = new L.Icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Define the cities you want to display
const cities = [
  { name: 'Dhaka', lat: 23.8103, lng: 90.4125 },
  { name: 'Chittagong', lat: 22.3569, lng: 91.7832 },
  { name: 'Sylhet', lat: 24.9045, lng: 91.8611 },
  { name: 'Rajshahi', lat: 24.3745, lng: 88.6042 },
  { name: 'Khulna', lat: 22.8456, lng: 89.5403 },
  { name: 'Barisal', lat: 22.7010, lng: 90.3535 },
  { name: 'Rangpur', lat: 25.7439, lng: 89.2752 },
  { name: 'Mymensingh', lat: 24.7471, lng: 90.4203 },
];

const CoverageMap = () => {
  return (
    <div className="w-full h-[400px] md:h-[500px] p-2">
      <MapContainer
        center={[23.6850, 90.3563]}
        zoom={7}
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {cities.map((city, index) => (
          <Marker
            key={index}
            position={[city.lat, city.lng]}
            icon={customIcon}
          >
            <Popup>{city.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default CoverageMap;
