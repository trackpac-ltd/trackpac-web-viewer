import React from "react";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import DialogNoAccountFound from "../../components/DialogNoAccount";
import MapPanel from "../../components/MapPanel";
import { CONFIG } from "../../config";

export default function Account() {
  const { id } = useParams();
  const [trackers, settrackers] = useState([]);
  const [showDialogNoAccountFound, setShowDialogNoAccountFound] =
    useState(false);

  useEffect(() => {
    //set page title
    document.title = "Account Viewer - " + id + " " + CONFIG.siteTitle;
    if (id === undefined) {
      //if there is no id, show the dialog
      setShowDialogNoAccountFound(true);
      return;
    }
    //function to fetch tracker locations from the Trackpac API
    const fetchTrackerLocations = () => {
      axios
        .get("https://api.trackpac.io/shared/account/" + id)
        .then((trackers) => {
          settrackers(trackers.data);
          //check if there are any trackers, if not, show the NoAccountFound dialog
          if (trackers.data.length === 0) {
            setShowDialogNoAccountFound(true);
          }
        })
        .catch((error) => {
          //if there IS an error, log it to console
          console.log("Axios fetch error", error);

          //if there is an error, show the dialog
          setShowDialogNoAccountFound(true);
        });
    };

    //fetch tracker locations otherwise you wait for the interval to run the first time
    fetchTrackerLocations();

    //set an interval to fetch tracker locations from the Trackpac API every 10 seconds
    const interval = setInterval(() => {
      fetchTrackerLocations();
      //10 seconds
    }, 10000);

    return () => clearInterval(interval);
  }, [id]);
  return (
    <div data-testid="mapContainer">
      <MapPanel trackers={trackers} />
      {
        //if there are no trackers, show a dialog
      }
      <DialogNoAccountFound open={showDialogNoAccountFound} />
    </div>
  );
}
