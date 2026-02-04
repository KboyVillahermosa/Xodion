import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { ExternalLink } from 'lucide-react';
import 'leaflet/dist/leaflet.css';

// Fix for Leaflet default icon issues in React/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
});

L.Marker.prototype.options.icon = DefaultIcon;

interface Location {
    id: number;
    name: string;
    city: string;
    address: string;
    lat: number;
    lng: number;
    googleMapsUrl: string;
    greeting: string;
}

const locations: Location[] = [
    {
        id: 1,
        name: "Main Headquarters",
        city: "Mandaue City, Cebu",
        address: "City Time Square, Mandaue City, Cebu 6000",
        lat: 10.3243,
        lng: 123.9311,
        googleMapsUrl: "https://maps.app.goo.gl/JfoQLHjsAkijLVhQ9",
        greeting: "MABUHAY!"
    }
];

const MapSection: React.FC = () => {
    return (
        <section className="bg-white overflow-hidden w-full">
            <div className="h-[600px] w-full relative z-0">
                <MapContainer
                    center={[20, 100]}
                    zoom={3}
                    scrollWheelZoom={false}
                    className="h-full w-full"
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    />

                    {locations.map((loc) => (
                        <Marker
                            key={loc.id}
                            position={[loc.lat, loc.lng]}
                            icon={L.divIcon({
                                className: 'custom-div-icon',
                                html: `
                                    <div class="marker-container">
                                        <div class="ring-beat"></div>
                                        <div class="marker-dot"></div>
                                    </div>
                                `,
                                iconSize: [40, 40],
                                iconAnchor: [20, 20],
                                popupAnchor: [0, -20]
                            })}
                        >
                            <Popup className="custom-popup">
                                <div className="p-2 min-w-[200px]">
                                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">
                                        {loc.greeting}
                                    </p>
                                    <h4 className="text-xl font-bold text-indigo-600 mb-2">{loc.city}</h4>
                                    <p className="text-sm text-gray-500 mb-4 leading-relaxed">
                                        {loc.address}
                                    </p>
                                    <a
                                        href={loc.googleMapsUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-indigo-600 transition-colors group"
                                    >
                                        Open in google map
                                        <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                    </a>
                                </div>
                            </Popup>
                        </Marker>
                    ))}
                </MapContainer>
            </div>

            <style>{`
                .marker-container {
                    position: relative;
                    width: 40px;
                    height: 40px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .marker-dot {
                    width: 12px;
                    height: 12px;
                    background-color: #4F46E5; /* indigo-600 */
                    border: 2px solid white;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(0,0,0,0.3);
                    z-index: 2;
                }

                .ring-beat {
                    position: absolute;
                    width: 12px;
                    height: 12px;
                    background-color: rgba(79, 70, 229, 0.4);
                    border-radius: 50%;
                    animation: ring-pulse 2.5s ease-out infinite;
                    z-index: 1;
                }

                @keyframes ring-pulse {
                    0% {
                        transform: scale(1);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(4.5);
                        opacity: 0;
                    }
                }

                .custom-div-icon {
                    background: none;
                    border: none;
                }

                .custom-popup .leaflet-popup-content-wrapper {
                    padding: 0;
                    border-radius: 1rem;
                    overflow: hidden;
                    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
                }
                .custom-popup .leaflet-popup-content {
                    margin: 0;
                    width: auto !important;
                }
                .custom-popup .leaflet-popup-tip {
                    background: white;
                }
            `}</style>
        </section>
    );
};

export default MapSection;
