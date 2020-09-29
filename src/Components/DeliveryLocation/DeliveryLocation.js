import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./deliverylocation.css";

const DeliveryLocation = () => {
  const position = [22.342398, 91.791406];
  return (
    <div className="deliveryl-ocation">
      <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Red Onion Restaurant
            <br />
            Order now!
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default DeliveryLocation;
