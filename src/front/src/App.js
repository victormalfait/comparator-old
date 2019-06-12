import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Signup from "./components/Signup/Signup";
import Header from "./components/Shared/Header";
import Aside from "./components/Shared/Aside";
import Login from "./components/Login/Login";
import Page404 from "./components/Shared/404";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { Provider } from "react-redux";
import store from "./configureStore";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="app app-header-fixed ">
            <Header />
            <Aside />
            <div id="content" className="app-content">
              <div className="app-content-body">
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/signup" component={Signup} />
                  <Route exact path="/login" component={Login} />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <Route component={Page404} />
                </Switch>
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
