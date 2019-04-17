import React from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";

export class Header extends React.Component {
  constructor() {
    super();
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  reduceMenu() {
    console.log('reduce');
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render(){
    return (
      <header id="header" className="app-header navbar" role="menu">
        <nav className="navbar navbar-header fixed-top navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-euro-sign"></i>  Comparator
          </Link>
        </nav>
        <nav className="navbar fixed-top navbar-light bg-light navbar-collapse bg-white">
          <div>
            <button onClick={this.reduceMenu} className="btn no-shadow navbar-btn float-left">
              <i className="fas fa-align-justify"></i>
            </button>
            <button onClick={this.handleShow} className="btn no-shadow navbar-btn active float-left">
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
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Vous n'êtes pas inscrit</Modal.Title>
          </Modal.Header>
          <Modal.Footer>
            <Link to="/login">
              <Button variant="secondary" onClick={this.handleClose}>Se connecter</Button>
            </Link>
            <Link to="/signup">
              <Button variant="primary" onClick={this.handleClose} className="btn">M'inscrire</Button>
            </Link>
          </Modal.Footer>
        </Modal>
      </header>
    )
  }
}
