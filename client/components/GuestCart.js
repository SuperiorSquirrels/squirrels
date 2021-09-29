import React from 'react';
import {Link} from 'react-router-dom';
import {getUserCartThunk, checkoutThunk, deleteUserCartThunk} from '../store/cart';
import {connect} from 'react-redux';

class UserCart extends React.Component {
  constructor() {
    super();
    this.state = {
      checkout: false,
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    try {
      // const userId = Number(this.props.match.params.id);
      // this.props.getUserCart(userId);

    } catch (err) {
      console.log("🧤 err", err);
    }
  }

  handleClick (item) {
    const userId = Number(this.props.match.params.id)
    this.props.deleteCartItem(userId, item)
  }

  handleSubmit() {
    this.setState({
      checkout: true,
    });
    // const userId = Number(this.props.match.params.id);
    // this.props.checkout(userId);
  }

  render() {
    let cart = [];
    let totalPrice = "";
    if (!window.localStorage.getItem('cart')) {
      return (
        <div>
          <h1>You have not found any new friends yet!</h1>
          <Link to="/products">
            Go back and find some new friends! (they can't wait!)
          </Link>
        </div>
      );
    }
      if (this.state.checkout) {
      return (
        <div>
          <div>
            {" "}
            <h1>We appreciate your interest in our business!</h1>
                <h3>Before checking out please sign up</h3>
              <Link to='/signup'>Signup</Link>
          </div>
        </div>
      );
      } else {
        cart = JSON.parse(window.localStorage.getItem('cart'))
        console.log('🧤 cart', cart);

      totalPrice = cart.reduce((accum, cartItem) => {
        return accum + cartItem.singleProductTotalPrice;
      }, 0);

      return (
        <div>
          <h1>Your cart items</h1>
          <div>
            <ul>
            {cart.map(cartItem => {
            return (
              <div className='cart-display' key={cartItem.productId}>
                <div >
                  <img style={{width:'100px'}, {height:'80px'}} src={cartItem.imageUrl}/>
                </div>
                <div className='cart-item'>
                  <p style={{margin:'0.5px'}, {marginBottom: '.5px'}}>Product name: {cartItem.productName}</p>
                  <p style={{marginTop:'1px'}}>Product single price: {`$${cartItem.productSinglePrice}`}</p>
                  <p style={{marginBottom:'-0.5rem'}, {marginTop:'-0.5rem'}}>Quantity: {cartItem.singleProductTotalQuantity}</p>
                  <p style={{marginBottom:'-0.5rem'}, {marginTop:'-0.5rem'}}>Total price: {`$${cartItem.singleProductTotalPrice}`}</p>
                  <button style={{marginBottom: '1px'}, {marginTop:'-0.5rem'}, {marginLeft:'50rem'}} onClick={() => this.handleClick(cartItem.id)}>Delete</button>
                 </div>
               </div>
              );
             })}
            </ul>
          </div>
          <Link to="/home"> Continue to shop </Link>
          <div>Total Price: ${totalPrice}</div>
          <button onClick={this.handleSubmit}>Check out</button>
        </div>
      );
    }
  }
}

// const mapState = (state) => ({
//   cart: state.cart,
// });

// const mapDispatch = (dispatch) => ({
//   getUserCart: (userId) => dispatch(getUserCartThunk(userId)),
//   deleteCartItem: (userId, product) => dispatch(deleteUserCartThunk(userId, product)),
//   checkout: (userId) => dispatch(checkoutThunk(userId)),
// })

export default UserCart

// connect(mapState, mapDispatch)(
