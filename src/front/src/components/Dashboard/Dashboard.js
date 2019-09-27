import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductCart from "../Product/ProductCart.js";
import { Grid, Button } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";

class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }
  componentDidMount() {
    axios.get("/products").then(products => {
      this.setState({ products: products.data.products });
    });
  }

  render() {
    const { user } = this.props.auth;
    return (
      <Grid container spacing={3}>
        {this.state.products.map((product, index) => (
          <ProductCart product={product} key={index} />
        ))}
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="primary" href="/product/add">
            Add Product
          </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="primary" href="/stores/add">
            Add Store
          </Button>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Button variant="contained" color="primary" href="/stores">
            See All Stores
          </Button>
        </Grid>
      </Grid>
    );
  }
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  products: state.products
});
export default connect(mapStateToProps)(Dashboard);
