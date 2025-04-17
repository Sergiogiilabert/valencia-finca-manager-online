
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { MapPin } from 'lucide-react';

interface LocationMapProps {
  longitude?: number;
  latitude?: number;
  zoom?: number;
  address?: string;
}

const LocationMap = ({
  longitude = -0.368277, // Default coordinates for Valencia
  latitude = 39.469749,
  zoom = 15,
  address = "Av. Reino de Valencia, 12, 46005 Valencia"
}: LocationMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const marker = useRef<mapboxgl.Marker | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // In a real application, you would get this from an environment variable
  // For this demo, we'll use a state variable that can be set by the user
  const handleTokenSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem('mapboxToken') as HTMLInputElement;
    if (input && input.value) {
      setMapboxToken(input.value);
      localStorage.setItem('mapbox_token', input.value);
    }
  };

  useEffect(() => {
    // Try to get token from localStorage
    const savedToken = localStorage.getItem('mapbox_token');
    if (savedToken) {
      setMapboxToken(savedToken);
    }
  }, []);

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current || map.current) return;

    mapboxgl.accessToken = mapboxToken;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [longitude, latitude],
        zoom: zoom,
        attributionControl: false,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');
      map.current.addControl(new mapboxgl.AttributionControl({ compact: true }));

      map.current.on('load', () => {
        setIsMapLoaded(true);
        
        // Add marker at the specified location
        if (!marker.current) {
          const el = document.createElement('div');
          el.className = 'custom-marker';
          el.innerHTML = `
            <div class="bg-valencia-blue text-white p-2 rounded-full shadow-lg">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 10c0 4.418-8 12-8 12s-8-7.582-8-12a8 8 0 1 1 16 0z" fill="#FF6B35"/>
                <circle cx="12" cy="10" r="3" fill="white"/>
              </svg>
            </div>
          `;
          
          marker.current = new mapboxgl.Marker(el)
            .setLngLat([longitude, latitude])
            .setPopup(
              new mapboxgl.Popup({ offset: 25 })
                .setHTML(`<strong>ValenciaFincas</strong><br>${address}`)
            )
            .addTo(map.current);
        }
      });
    } catch (error) {
      console.error("Error initializing map:", error);
      setMapboxToken('');
    }

    return () => {
      if (map.current) {
        map.current.remove();
        map.current = null;
      }
      if (marker.current) {
        marker.current = null;
      }
    };
  }, [longitude, latitude, zoom, address, mapboxToken]);

  if (!mapboxToken) {
    return (
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-4">
          <MapPin className="h-12 w-12 mx-auto mb-2 text-valencia-blue" />
          <h3 className="text-lg font-medium text-gray-800">Configurar Mapa</h3>
          <p className="text-sm text-gray-600 mb-4">
            Para ver el mapa, introduce tu token público de Mapbox.
            Puedes obtenerlo creando una cuenta en <a href="https://www.mapbox.com" target="_blank" rel="noopener noreferrer" className="text-valencia-orange hover:underline">mapbox.com</a>
          </p>
        </div>
        <form onSubmit={handleTokenSubmit} className="space-y-3">
          <div>
            <input
              type="text"
              name="mapboxToken"
              placeholder="Introduce tu token público de Mapbox"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <p className="text-xs text-gray-500 mt-1">
              Este token se guardará en tu navegador para futuras visitas.
            </p>
          </div>
          <button 
            type="submit"
            className="w-full bg-valencia-orange hover:bg-valencia-orange/90 text-white py-2 rounded"
          >
            Mostrar Mapa
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full h-[400px] relative rounded-lg overflow-hidden shadow-md">
      <div ref={mapContainer} className="absolute inset-0" />
      {!isMapLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-2 text-valencia-blue animate-pulse" />
            <p className="text-gray-600">Cargando mapa...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationMap;
