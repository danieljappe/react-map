import logo from './logo.svg';
import './App.css';
import "\leaflet/dist/leaflet.css"

import { MapContainer, Marker, TileLayer, Popup, Tooltip } from 'react-leaflet';
import { Icon, divIcon, Point, point } from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-cluster';

function App() {

  const markers = [
    {
      geocode : [51.441262, 5.476806],
      popup: "Eindhoven",
      city: "Eindhoven",
      imageUrl: "https://example.com/eindhoven.jpg"
    },
    {
      geocode : [52.373054, 4.892735],
      popup: "Amsterdam",
      city: "Amsterdam",
      imageUrl: "https://example.com/amsterdam.jpg"
    },
    {
      geocode : [51.920237, 4.487927],
      popup: "Rotterdam",
      city: "Rotterdam",
      imageUrl: "https://example.com/rotterdam.jpg"
    },
    {
      geocode : [52.090437, 5.120412],
      popup: "Utrecht",
      city: "Utrecht",
      imageUrl: "https://firebasestorage.googleapis.com/v0/b/reactphotoapp-d4114.appspot.com/o/IMG_2759.jpg?alt=media&token=522156eb-b759-4745-85fb-5f4ad765013b"
    },
    {
      geocode : [51.217824, 4.421239],
      popup: "Antwerpen",
      city: "Antwerpen",
      imageUrl: "https://example.com/antwerpen.jpg"
    },
    {
      geocode : [50.849415, 5.696045],
      popup: "Maastricht",
      city: "Maastricht",
      imageUrl: "https://example.com/maastricht.jpg"
    },
    {
      geocode : [50.941330, 6.956779],
      popup: "Köln",
      city: "Köln",
      imageUrl: "https://example.com/koln.jpg"
    },
    {
      geocode : [50.847932, 4.358151],
      popup: "Bruxelles",
      city: "Bruxelles",
      imageUrl: "https://example.com/bruxelles.jpg"
    },
    {
      geocode : [52.387612, 4.638482],
      popup: "Haarlem",
      city: "Haarlem",
      imageUrl: "https://example.com/haarlem.jpg"
    }
  ];

  const customIcon = new Icon({
    iconUrl: require("./icons/location-pin.png"),
    iconSize: [38,38] // size of icon
  })

  const createCustomClusterIcon = (cluster) => {
    return new divIcon({
      html : `<div class="cluster-icon">${cluster.getChildCount()}</div>`, 
      className: "custom-marker-cluster",
      iconSize: point(33,33,true)  
    })
  }

  return (
    <MapContainer 
      center={[51.43931456881027, 5.478187630225352]}
      zoom={8}
    >
      <TileLayer
        //attribution='&copy; <a href="https://www.openstreetmap.org/copyright"> OpenStreetMap </a> contributors'
        url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <TileLayer
        attribution='<a href="https://jawg.io" title="Tiles Courtesy of Jawg Maps" target="_blank">&copy; <b>Jawg</b>Maps</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://tile.jawg.io/jawg-dark/{z}/{x}/{y}{r}.png?access-token={accessToken}'
        minZoom={0}
        maxZoom={22}
        accessToken='pWz3fJwYheew26qbpnFaCF88I66iNa0EHAO8rVtwnynWCRoa57P9tWRLM6d1iKGW'
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >

        {markers.map((marker) => {
          const isEindhoven = marker.popup === "Eindhoven";
          const iconSize = isEindhoven ? [56, 56] : [38, 38];
          const icon = isEindhoven ? new Icon({
            iconUrl: require("./icons/location-pin.png"),
            iconSize: iconSize
          }) : customIcon;

          return (
            <Marker position={marker.geocode} icon={icon}>
              <Popup>
                <h1 className='popup-title'>{marker.popup}</h1>
                <div>
                  <img src={marker.imageUrl} alt={marker.city} className='popup-image'/>
                </div>
              </Popup>
              <Tooltip direction="top" offset={[0, -iconSize[1] / 2]} className="custom-tooltip">
                {marker.city}
              </Tooltip>
            </Marker>
            );
        })}

      </MarkerClusterGroup>
      
    </MapContainer>
  );
}

export default App;
