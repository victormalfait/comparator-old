import React from "react";

class ProductCart extends React.Component {
  render() {
    return (
      <li className="float-left mx-4">
        <div className="card mb-3" style={{ maxWidth: "320px" }}>
          <div className="row no-gutters">
            <div className="col-md-4">
              <img src="..." className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{this.props.product.name}</h5>
                <p className="card-text" />
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  }
}

export default ProductCart;
