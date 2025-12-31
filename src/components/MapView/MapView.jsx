import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapView.css';
import L from 'leaflet';

function MapView() {
  const centerPosition = [23.0827, 90.2707];

const satelliteIcon = L.divIcon({
  className: 'custom-satellite-marker',
  html: '<div class="satellite-dot"></div>',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
  popupAnchor: [0, -10],
});


  const markers = [
    {
      id: 1,
      position: [65.647216,20.244992],
      label: 'Marker 1 - Center'
    },
    {
      id: 2,
      position: [65.647385, -20.244772],
      label: 'Marker 2'
    },
    {
      id: 3,
      position: [65.647385,-20.244772],
      label: 'Marker 3'
    },
    {
      id: 4,
      position: [-53.041431,-70.847119],
      label: 'Marker 3'
    },
    {
      id: 5,
      position: [-53.041431,-70.847119],
      label: 'Marker 3'
    },
    {
      id: 6,
      position: [24.100029,-110.386276],
      label: 'Marker 3'
    },
    {
      id: 7,
      position: [-46.532430,168.383720],
      label: 'Marker 3'
    },
    {
      id: 8,
      position: [-25.860231,28.453983],
      label: 'Marker 3'
    }
  ];

  return (
    <MapContainer
      center={centerPosition}
      zoom={11}
      className="leaflet-map"
    >
      <TileLayer
        attribution="© OpenStreetMap contributors"
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
      />

      {/* Render multiple markers */}
      {markers.map(marker => (
        <Marker key={marker.id} position={marker.position} icon={satelliteIcon}>
          <Popup>{marker.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
