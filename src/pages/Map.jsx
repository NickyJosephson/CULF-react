import React, {useState} from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function MapPage() {
    // const [position, setPosition] = useState(null);
    // const MapEvents = () => {
    //     useMapEvents({
    //         click(e) {
    //             setPosition(e.latlng);
    //             onLocationSelect(e.latlng);
    //         },
    //     });
    //     return null;
    // };
    // return (
    //     <MapContainer
    //         center={{ lat: 42.4534, lng: -76.4735 }}
    //         zoom={15}
    //         scrollWheelZoom={true}
    //     >
    //         <TileLayer
    //             attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    //             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    //         />
    //         {position && <Marker position={position}></Marker>}
    //         <MapEvents />
    //     </MapContainer>
    // );
}
