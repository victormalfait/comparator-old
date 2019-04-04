import React from "react";

export class Header extends React.Component {
  reduceMenu() {
    console.log('reduce');
  }

  showProfile() {
    console.log('show profile');
  }
  render(){
    return (
      <header id="header" className="app-header navbar" role="menu">
        <nav className="navbar navbar-header fixed-top navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            <i className="fas fa-euro-sign"></i>  Comparator
          </a>
        </nav>
        <nav className="navbar fixed-top navbar-light bg-light navbar-collapse">
          <div>
            <button onClick={this.reduceMenu} className="btn no-shadow navbar-btn float-left">
              <i className="fas fa-align-justify"></i>
            </button>
            <button onClick={this.showProfile} className="btn no-shadow navbar-btn active float-left">
              <i className="icon-user fa-fw"></i>
            </button>
            <form className="form-inline navbar-form navbar-left shift float-left" role="search">
              <input type="text" className="form-control input-sm bg-light rounded padder" placeholder="Search projects..." />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-sm bg-light rounded"><i className="fas fa-search"></i></button>
              </span>
            </form>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <button data-toggle="dropdown" className="dropdown-toggle btn no-shadow navbar-btn">
                <i className="far fa-bell"></i>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
