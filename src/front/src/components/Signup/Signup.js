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
    API.signup(_send).then(function(data){
      localStorage.setItem('token', data.data.token);
      window.location = "/dashboard"
    },function(error){
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
      <div className="Login">
        <Form.Group controlId="email" bsSize="large">
          <Form.Label>Email</Form.Label>
          <Form.Control autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="password" bsSize="large">
          <Form.Label>Password</Form.Label>
          <Form.Control value={this.state.password} onChange={this.handleChange} type="password"/>
        </Form.Group>
        <Form.Group controlId="cpassword" bsSize="large">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control value={this.state.cpassword} onChange={this.handleChange} type="password"/>
        </Form.Group>
        <Button
          onClick={this.send}
          block
          bsSize="large"
          type="submit"
        >
          Inscription
        </Button>
      </div>
    )
  }
}
