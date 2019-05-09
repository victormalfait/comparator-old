import React from 'react';
import { Button, Form } from "react-bootstrap";
import API from '../../utils/API';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      password: "",
      cpassword: ""
    }
    this.handleChange.bind(this);
    this.send.bind(this);
  }
  send = event => {
    if(this.state.email.length === 0){
      return;
    }
    if(this.state.password.length === 0 || this.state.password !== this.state.cpassword){
      return;
    }
    var _send = {
      email: this.state.email,
      password: this.state.password
    }
    API.signup(_send).then((data) => {
      localStorage.setItem('token', data.data.token);
      window.location = "/dashboard"
    },(error) => {
      console.log(error);
      return;
    })
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }
  render() {
    return(
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-10">
            <div className="card card-default">
              <div className="card-header font-bold">Sign up</div>
              <div className="card-body">
                <Form.Group controlId="email" size="lg">
                  <Form.Label>Email</Form.Label>
                  <Form.Control autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="password" size="lg">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={this.state.password} onChange={this.handleChange} type="password"/>
                </Form.Group>
                <Form.Group controlId="cpassword" size="lg">
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control value={this.state.cpassword} onChange={this.handleChange} type="password"/>
                </Form.Group>
                <Button
                  onClick={this.send}
                  block
                  size="lg"
                  type="submit"
                >
                  Inscription
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
