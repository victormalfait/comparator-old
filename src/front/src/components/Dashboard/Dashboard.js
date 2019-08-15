import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ProductCart from "../Product/ProductCart.js";

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
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <h1>Liste Produits</h1>
        {this.state.products.map((product, index) => (
          <ProductCart product={product} key={index} />
        ))}
      </div>
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
