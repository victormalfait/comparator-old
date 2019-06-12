import React from "react";
import { Link } from "react-router-dom";

class Aside extends React.Component {
  render() {
    return (
      <aside className="app-aside d-none d-sm-block bg-dark mh-100">
        <div className="aside-wrap">
          <div className="aside-nav">
            <div className="clearfix text-center invisible" id="aside-user">
              <div className="dropdown wrapper">
                <Link
                  to="#"
                  data-toggle="dropdown"
                  className="dropdown-toggle hidden-folded"
                >
                  <span className="clear">
                    <span className="block m-t-sm">
                      <strong className="font-bold text-lt">
                        Victor Malfait
                      </strong>
                      <b className="caret" />
                    </span>
                  </span>
                </Link>
                <ul className="dropdown-menu animated fadeInRight w hidden-folded">
                  <li className="wrapper b-b m-b-sm bg-info m-t-n-xs">
                    <span className="arrow top hidden-folded arrow-info" />
                    <div>
                      <p />
                    </div>
                    <div className="progress progress-xs m-b-none dker">
                      <div
                        className="progress-bar bg-white"
                        data-toggle="tooltip"
                        data-original-title="50%"
                        style={{ width: "50%" }}
                      />
                    </div>
                  </li>
                  <li>
                    <Link to="#">Settings</Link>
                  </li>
                  <li>
                    <a href="page_profile.html">Profile</a>
                  </li>
                  <li>
                    <Link to="#">
                      <span className="badge bg-danger float-right">3</span>
                      Notifications
                    </Link>
                  </li>
                  <li className="divider" />
                  <li>
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <nav ui-nav="" className="navi clearfix">
          <ul className="nav">
            <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
              <span>Navigation</span>
            </li>
            <li>
              <Link to="#" className="auto">
                <span className="float-right text-muted">
                  <i className="fa fa-fw fa-angle-right text" />
                  <i className="fa fa-fw fa-angle-down text-active" />
                </span>
                <i className="glyphicon glyphicon-stats icon text-primary-dker" />
                <span className="font-bold">Dashboard</span>
              </Link>
            </li>
            <li className="line dk" />
            <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
              <span>Components</span>
            </li>
            <li className="line dk hidden-folded" />
            <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
              <span>Your Stuff</span>
            </li>
            <li>
              <Link to="/profile">
                <i className="icon-user icon text-success-lter" />
                <b className="badge bg-success float-right">30%</b>
                <span>Profile</span>
              </Link>
            </li>
            <li>
              <Link to="#">
                <i className="icon-question icon" />
                <span>Documents</span>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}

export default Aside;
