import React from "react";

export class Aside extends React.Component {
  render(){
    return (
      <aside className="app-aside d-none d-sm-block bg-dark mh-100">
        <div className="aside-wrap">
          <div className="aside-nav">
            <div className="clearfix text-center invisible" id="aside-user">
              <div className="dropdown wrapper">
                <a href="#" data-toggle="dropdown" className="dropdown-toggle hidden-folded">
                  <span className="clear">
                    <span className="block m-t-sm">
                      <strong className="font-bold text-lt">Victor Malfait</strong>
                      <b className="caret"></b>
                    </span>
                  </span>
                </a>
                <ul className="dropdown-menu animated fadeInRight w hidden-folded">
                  <li className="wrapper b-b m-b-sm bg-info m-t-n-xs">
                    <span className="arrow top hidden-folded arrow-info"></span>
                    <div>
                      <p></p>
                    </div>
                    <div className="progress progress-xs m-b-none dker">
                      <div className="progress-bar bg-white" data-toggle="tooltip" data-original-title="50%" style={{width: '50%'}}></div>
                    </div>
                  </li>
                  <li>
                    <a href="">Settings</a>
                  </li>
                  <li>
                    <a href="page_profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="">
                      <span className="badge bg-danger float-right">3</span>
                      Notifications
                    </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="page_signin.html">Logout</a>
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
              <a href="" className="auto">
                <span className="float-right text-muted">
                  <i className="fa fa-fw fa-angle-right text"></i>
                  <i className="fa fa-fw fa-angle-down text-active"></i>
                </span>
                <i className="glyphicon glyphicon-stats icon text-primary-dker"></i>
                <span className="font-bold">Dashboard</span>
              </a>
            </li>
            <li className="line dk"></li>
            <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
              <span>Components</span>
            </li>
            <li className="line dk hidden-folded"></li>
            <li className="hidden-folded padder m-t m-b-sm text-muted text-xs">
              <span>Your Stuff</span>
            </li>
            <li>
              <a href="page_profile.html">
                <i className="icon-user icon text-success-lter"></i>
                <b className="badge bg-success float-right">30%</b>
                <span>Profile</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="icon-question icon"></i>
                <span>Documents</span>
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}
