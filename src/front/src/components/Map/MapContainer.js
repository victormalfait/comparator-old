import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

export class MapContainer extends Component {
  render() {
    const mapStyle = {
      position: "relative"
    };
    return (
      <div style={mapStyle}>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: 48.864716,
            lng: 2.349014
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCCQxpdpaBZxw7eRokApdLKzo16855sWuc"
})(MapContainer);
