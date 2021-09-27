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
    const quantity = [];
    for (let i=1; i <= product.stock; i++) {
      quantity.push(i);
    }
    return (
      <div>
        <div className="single-product">
          <img src={product.imageUrl} className="single-product-img" />
          <div className="single-product-card">
            <p><span className="productInfo">Name: </span>{product.name}</p>
            <p><span className="productInfo">Type: </span> {product.animalType}</p>
            <p><span className="productInfo">Color: </span>{product.color}</p>
            <p><span className="productInfo">Description: </span>{product.description}</p>
            <p><span className="productInfo">Price: $</span>{product.price}</p>
            <div className="productInfo">
              {product.stock < 4
                ? `There are only ${product.stock} left!`
                : "In Stock!"}
            </div>
          </div>
        </div>
        <div>
          {/* <label htmlFor="selectQty">Quantity</label> */}
          <select name="selectQty">
            {quantity.map((num, index) => <option key={index} value={num}>{num}</option>)}
          </select>
          <button id="addToCart-button">Add to Cart</button>
        </div>
        <Link to={"/products"}>
          <button id="goBackToAllPro-button">All Products</button>
        </Link>
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
