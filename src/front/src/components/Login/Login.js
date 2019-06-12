import React from "react";
import API from "../../utils/API";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleChange.bind(this);
    this.send.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }

  onSubmit = e => {
    e.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-10">
            <div className="card card-default">
              <div className="card-header font-bold">Sign in</div>
              <div className="card-body">
                <div controlId="email" size="lg">
                  <label for="email">Email</label>
                  <input
                    value={this.state.email}
                    onChange={this.handleChange}
                    error={errors.email}
                    id="email"
                    type="email"
                    className={classnames("", {
                      invalid: errors.email || errors.emailnotfound
                    })}
                  />
                  <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                  </span>
                </div>
                <div controlId="password" size="lg">
                  <label for="password">Password</label>
                  <input
                    onChange={this.handleChange}
                    value={this.state.password}
                    error={errors.password}
                    id="password"
                    type="password"
                    className={classnames("", {
                      invalid: errors.password || errors.passwordincorrect
                    })}
                  />
                  <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                  </span>
                </div>
                <button onClick={this.send} block size="lg" type="submit">
                  Connexion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
