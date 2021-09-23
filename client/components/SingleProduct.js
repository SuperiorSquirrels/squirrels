import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "../store/singleProduct";

class SingleProduct extends React.Component {
  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.props.fetchSingleProduct(id);
  }
  render() {
    const product = this.props.product;
    return (
      <div>
        <img src={product.imageUrl} />
        <div>{product.name}</div>
        <div>{product.price}</div>
        <div>
          {product.stock < 4
            ? `There are only ${product.stock} left!`
            : "In Stock!"}
        </div>
        <div>{product.animalType}</div>
        <div>{product.color}</div>
        <div>{product.description}</div>
        <button>Add to Cart</button>
        <Link to={"/products"}>All Products</Link>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  product: state.singleProduct,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
