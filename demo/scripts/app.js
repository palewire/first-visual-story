// Import dependencies
import * as L from 'leaflet';

// Import data
import homicides from '../_data/harvard_park_homicides.json';

// Set the id of the div on the page where the map will go
const divId = 'map';

// Create the map
const map = L.map(divId, {
  scrollWheelZoom: false,
});

// Add a satellite layer
L.tileLayer(
  'https://tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    minZoom: 13,
  }
).addTo(map);

// Set the center and zoom
map.setView([33.983265, -118.306799], 18);

// Load the data
homicides.forEach((obj) => {
  L.circleMarker([obj.latitude, obj.longitude])  // As a pin ...
    .addTo(map)
    .bindTooltip(obj.first_name + ' ' + obj.last_name, { permanent: true });  // ... with a tooltip
});