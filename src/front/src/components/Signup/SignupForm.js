import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Container, TextField, Button, Grid } from "@material-ui/core";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../redux/actions/authActions";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  }
}));

function SignupForm(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    name: "",
    firstname: "",
    email: "",
    password: "",
    cpassword: ""
  });

  const [errors, setErrors] = useState({});
  useEffect(
    () => {
      if (props.errors) {
        setErrors({
          errors: props.errors
        });
      }
    },
    [props.errors]
  );
  const handleChange = event => {
    setValues({
      ...values,
      [event.target.id]: event.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    const newUser = {
      name: values.name,
      firstname: values.firstname,
      email: values.email,
      password: values.password,
      cpassword: values.cpassword
    };

    props.registerUser(newUser, props.history);
  };
  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Container component="main" maxWidth="xs">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="firstname"
              variant="outlined"
              required
              fullWidth
              id="firstname"
              label="First Name"
              autoFocus
              type="text"
              error={errors.firstname}
              value={values.firstname}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="name"
              label="Last Name"
              name="name"
              type="text"
              error={errors.name}
              value={values.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              error={errors.email}
              value={values.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              error={errors.password}
              value={values.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="cpassword"
              label="Repeat Password"
              type="password"
              id="cpassword"
              error={errors.cpassword}
              value={values.cpassword}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Button type="submit" fullWidth variant="contained" color="primary">
          Sign Up
        </Button>
      </Container>
    </form>
  );
}

SignupForm.propTypes = {
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
)(withRouter(SignupForm));
