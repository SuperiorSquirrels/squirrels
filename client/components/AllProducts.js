import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products";
import Product from "./Product";

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const products = this.props.products || [];
    return (
      <div>
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts);
