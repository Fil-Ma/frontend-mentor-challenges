import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";
import markerIcon from "@assets/IpTracker/icon-location.svg?inline";
import { Icon } from "leaflet";
import { TMapPosition } from "./types";

const LeafletMap = ({ position }: { position: TMapPosition }) => {
  return (
    <MapContainer
      zoomControl={false}
      style={{ height: 700 }}
      center={position}
      zoom={13}
      scrollWheelZoom={false}
    >
      <ChangeView center={position} zoom={13} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        position={position}
        icon={
          new Icon({
            iconUrl: markerIcon,
          })
        }
      />
    </MapContainer>
  );
};

export default LeafletMap;

function ChangeView({ center, zoom }: { center: TMapPosition; zoom: number }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}
