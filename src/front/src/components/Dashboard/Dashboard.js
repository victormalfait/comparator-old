import React, { Component } from "react";

import API from "../../utils/API";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.disconnect.bind(this);
  }
  disconnect = event => {
    API.logout();
    window.location = "/";
  };
  render() {
    return (
      <div className="Dashboard">
        <h1>Dashboard</h1>
        <button onClick={this.disconnect} block bsSize="large" type="submit">
          Se déconnecter
        </button>
      </div>
    );
  }
}

export default Dashboard;
