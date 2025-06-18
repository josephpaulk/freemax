import React, { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in Leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapItem {
  id: string;
  title?: string;
  name?: string;
  location: string;
  lat?: number;
  lng?: number;
  description?: string;
  bio?: string;
}

interface MapComponentProps {
  items: MapItem[];
  type: 'projects' | 'stewards';
}

const MapComponent: React.FC<MapComponentProps> = ({ items, type }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    // Initialize map
    if (!mapInstanceRef.current) {
      mapInstanceRef.current = L.map(mapRef.current).setView([39.8283, -98.5795], 4); // Center of US

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(mapInstanceRef.current);
    }

    const map = mapInstanceRef.current;

    // Clear existing markers
    map.eachLayer((layer) => {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });

    // Add markers for items with coordinates
    items.forEach((item) => {
      if (item.lat && item.lng) {
        const title = type === 'projects' ? item.title : item.name;
        const description = type === 'projects' ? item.description : item.bio;
        
        const marker = L.marker([item.lat, item.lng])
          .bindPopup(`
            <div class="p-2">
              <h3 class="font-bold text-sm mb-1">${title}</h3>
              <p class="text-xs text-gray-600 mb-2">${item.location}</p>
              <p class="text-xs">${description?.slice(0, 100)}...</p>
            </div>
          `)
          .addTo(map);
      }
    });

    // Fit map to show all markers if there are any
    const validItems = items.filter(item => item.lat && item.lng);
    if (validItems.length > 0) {
      
      const group = new L.FeatureGroup(
        validItems.map(item => L.marker([item.lat!, item.lng!]))
      );
      map.fitBounds(group.getBounds().pad(0.1));
    }

    return () => {
      // Cleanup is handled by the map instance check
    };
  }, [items, type]);

  useEffect(() => {
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div 
      ref={mapRef} 
      className="w-full h-full rounded-lg"
      style={{ minHeight: '300px' }}
    />
  );
};

export default MapComponent;