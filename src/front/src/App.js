import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Home } from './components/Home/Home.js';
import { Signup } from './components/Signup/Signup.js';
import { Header } from './components/Shared/Header.js';
import { Aside } from './components/Shared/Aside.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app app-header-fixed ">
          <Header/>
          <Aside/>
          <div id="content" className="app-content">
            <div className="app-content-body">
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route exact path ="/signup" component={Signup}/>
                  <PrivateRoute path='/dashboard' component={Dashboard} />
              </Switch>
            </div>
          </div>
      </div>
    );
  }
}
export default App;
