import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/Shared/Layout";
import { Provider } from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline";
import store from "./configureStore";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app app-header-fixed ">
            <CssBaseline />
            <Layout />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
