import React from 'react';
import { Button, Form } from "react-bootstrap";
import API from '../../utils/API';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email : "",
      password: ""
    }
    this.handleChange.bind(this);
    this.send.bind(this);
  }
  send = event => {
    if (this.state.email.length === 0) {
      return;
    }
    if (this.state.password.length === 0) {
      return;
    }
    API.login(this.state.email, this.state.password).then(function(data){
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
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-10">
            <div className="card card-default">
              <div className="card-header font-bold">Sign in</div>
              <div className="card-body">
                <Form.Group controlId="email" size="lg">
                  <Form.Label>Email</Form.Label>
                  <Form.Control autoFocus type="email" value={this.state.email} onChange={this.handleChange}/>
                </Form.Group>
                <Form.Group controlId="password" size="lg">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={this.state.password} onChange={this.handleChange} type="password"/>
                </Form.Group>
                <Button
                onClick={this.send}
                block
                size="lg"
                type="submit"
                >
                Connexion
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
