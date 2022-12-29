import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import BasicMarker from "../BasicMarker";
import LogoOverlay from "../LogoOverlay";
import L from "leaflet";
import { CONFIG } from "../../config";

export default function MapPanel(props) {
  const [mapRef, setMapRef] = useState(null);

  //use effect runs on load to fit the map to the markers
  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (mapRef) {
        // fit to markers
        if (props.trackers.length > 0) {
          //center map to all trackers
          const group = new L.featureGroup(
            props.trackers.map((tracker) => {
              return L.marker([
                tracker.last_location.latitude,
                tracker.last_location.longitude,
              ]);
            })
          );
          mapRef.fitBounds(group.getBounds());
        }
      }
    }
    return () => (mounted = false);
  }, [mapRef, props.trackers]);

  return (
    <>
      <MapContainer
        className="mapContainer"
        zoom={15}
        //change to whatever you want to first show
        center={[0, 0]}
        scrollWheelZoom={true}
        ref={(ref) => {
          setMapRef(ref);
        }}
      >
        {
          // tile layer choices can be found here: https://leaflet-extras.github.io/leaflet-providers/preview/
        }
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        {
          //loop through the trackers and create a marker for each one
        }
        {props.trackers.map((tracker) => {
          //if the tracker has no location, don't show it
          if (!tracker?.last_location?.latitude) {
            return null;
          }
          return <BasicMarker tracker={tracker} />;
        })}
        {
          //add an overlay logo
        }
      </MapContainer>
      <LogoOverlay
        src={CONFIG.logo_src}
        alt={CONFIG.logo_alt}
        link={CONFIG.site_url}
      />
    </>
  );
}
