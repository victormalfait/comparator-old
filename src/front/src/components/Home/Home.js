import React from "react";
import API from "../../utils/API";
import ProductCart from "../Product/ProductCart.js";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  componentDidMount() {
    API.products().then(data => {
      this.setState({ products: data.data.products });
    });
  }

  createProductCart(product, index) {
    return <ProductCart product={product} key={index} />;
  }

  render() {
    const { products } = this.state;
    return (
      <div>
        <ul className="list-unstyled">
          {products.map((product, index) =>
            this.createProductCart(product, index)
          )}
        </ul>
      </div>
    );
  }
}

export default Home;
