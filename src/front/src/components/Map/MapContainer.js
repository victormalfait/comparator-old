import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyCCQxpdpaBZxw7eRokApdLKzo16855sWuc");
Geocode.enableDebug();

const mapStyles = {
  width: "100%",
  height: "100%"
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: 48.864716,
          lng: 2.349014
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCCQxpdpaBZxw7eRokApdLKzo16855sWuc"
})(MapContainer);
