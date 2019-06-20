import React, { Component } from "react";
import SignupForm from "./SignupForm";

export default class Signup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="signup">
        <SignupForm />
      </div>
    );
  }
}
