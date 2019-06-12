import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";
import classnames from "classnames";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cpassword: "",
      name: "",
      firstname: "",
      age: ""
    };
    this.handleChange.bind(this);
    this.send.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
    console.log(newUser);
    this.props.registerUser(newUser, this.props.history);
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  render() {
    const { errors } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-10">
            <div className="card card-default">
              <div className="card-header font-bold">Sign up</div>
              <div className="card-body">
                <form noValidate onSubmit={this.onSubmit}>
                  <div class="input-field">
                    <label for="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                      error={errors.email}
                      className={classnames("", {
                        invalid: errors.email
                      })}
                    />
                    <span className="red-text">{errors.email}</span>
                  </div>
                  <div class="input-field">
                    <label for="password">Password</label>
                    <input
                      id="password"
                      error={errors.password}
                      value={this.state.password}
                      onChange={this.handleChange}
                      type="password"
                      className={classnames("", {
                        invalid: errors.password
                      })}
                    />
                  </div>
                  <div class="input-field">
                    <label for="">Confirm Password</label>
                    <input
                      value={this.state.cpassword}
                      onChange={this.handleChange}
                      type="password"
                    />
                  </div>
                  <div class="input-field">
                    <label for="">Name</label>
                    <input
                      value={this.state.name}
                      onChange={this.handleChange}
                      type="text"
                    />
                  </div>
                  <div class="input-field">
                    <label for="">Firstname</label>
                    <input
                      value={this.state.firstname}
                      onChange={this.handleChange}
                      type="text"
                    />
                  </div>
                  <div class="input-field">
                    <label for="">Age</label>
                    <input
                      value={this.state.age}
                      onChange={this.handleChange}
                      as="select"
                    />
                  </div>
                  <button onClick={this.send} block size="lg" type="submit">
                    Inscription
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(Signup));
