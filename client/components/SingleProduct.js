import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSingleProduct } from "../store/singleProduct";
import { addToCartThunk } from "../store/cart";

class SingleProduct extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectQty: 1
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    const id = Number(this.props.match.params.id);
    this.props.fetchSingleProduct(id);
  }

  onChange(evt) {
    this.setState({
      selectQty: evt.target.value
    });
  }

  handleClick() {
    const item = {
      userId: this.props.userId,
      orderDetail: {
        productId: this.props.product.id,
        singleProductTotalQuantity: Number(this.state.selectQty),
        singleProductTotalPrice: Number(this.state.selectQty) * this.props.product.price
      }
    }
    this.props.addToCart(this.props.userId, item)
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
          <select name="selectQty" onChange={this.onChange}>
            {quantity.map((num, index) => <option key={index} value={num}>{num}</option>)}
          </select>
          <button id="addToCart-button" onClick={this.handleClick} >Add to Cart</button>
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
  userId: state.auth.id
});

const mapDispatchToProps = (dispatch) => ({
  fetchSingleProduct: (id) => dispatch(fetchSingleProduct(id)),
  addToCart: (id, item) => dispatch(addToCartThunk(id, item))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
