import moment from "moment";
import { Marker, Popup } from "react-leaflet";
import L from "leaflet";
import { Button } from "@mui/material";

export default function BasicMarker(props) {
  //get the tracker object from the props
  const { tracker } = props;

  //  Create the base icon for displaying the tracker image
  const LeafIcon = L.Icon.extend({
    options: {},
  });

  //format the date to a readable format
  function formatDate(dateUTC) {
    var date = moment.utc(dateUTC).format();
    return moment.utc(date).local().format("lll");
  }

  //get image for tracker from the API, if no image is set, use a placeholder
  function getTrackerImage(trackerImage, width, height, className) {
    return new LeafIcon({
      iconUrl: trackerImage ? trackerImage : "/tracker-placeholder.jpeg",
      iconSize: [width, height],
      className: className,
    });
  }

  // create a marker with a popup
  return (
    <div data-testid="mapMarker">
      <Marker
        position={[
          tracker.last_location.latitude,
          tracker.last_location.longitude,
        ]}
        className={"tracker-" + tracker.id}
        key={"tracker-" + tracker.id}
        icon={getTrackerImage(tracker?.image_url, 40, 40, "tracker-icon")}
        test
      >
        <Popup>
          <h5>{tracker.name} </h5>
          <strong>Last Updated: </strong>
          {formatDate(tracker.last_updated)}
          <br />
          <strong>Location: </strong>
          {tracker.last_location.geocode}
        </Popup>
      </Marker>
    </div>
  );
}
