import React from 'react';
import {Link} from 'react-router-dom'
import {getUserCartThunk} from '../store/cart'
import {connect} from 'react-redux'

class UserCart extends React.Component {
  constructor() {
    super()
    this.state = {
      quantity: '',
      totalPrice: ''
    }
  }
  componentDidMount () {



    try {
      const userId = Number(this.props.match.params.id)
      this.props.getUserCart(userId)
    } catch (err) {
      console.log('🧤 err', err);
    }
  }

  render() {
    const cart = this.props.cart
    console.log('🧤 cart in component', cart);
    let totalPrice = '';
    if (!cart.length) {
      return (
        <div>
          <div>You have not found any new friends yet!</div>
          <Link to="/products">Go back and find some new friends! (they can't wait!)</Link>
        </div>
      )
    }
    // else {
    //   console.log()
    //   totalPrice = cart.reduce((accum, cartItem) => {

    //     console.log("🌟🌟🌟---------", cartItem)

    //     return accum + cartItem.order_products.singleProductTotalPrice
    //   }, 0)
    // }

    return (
      <div>
        <h1>Your cart items</h1>
        <div>
          <ul>
            {cart.map(cartItem => {
            return (
            <div className='cart-display' key={cartItem.id}>
            <div >
              <img style={{width:'100px'}, {height:'80px'}} src={cartItem.imageUrl}/>
            </div>
            <div className='cart-item'>
              <p style={{margin:'0.5px'}, {marginBottom: '.5px'}}>Product name: {cartItem.name}</p>
              <p style={{marginTop:'1px'}, {margin:'0.5px'}}>Product type: {cartItem.animalType}</p>
              <p style={{marginTop:'1px'}}>Product single price: {`$${cartItem.price}`}</p>
              <p style={{marginBottom:'-0.5rem'}, {marginTop:'-0.5rem'}}>Quantity: {cartItem.order_products.singleProductTotalQuantity}</p>
              {/* <p style={{marginBottom:'-0.5rem'}, {marginTop:'-0.5rem'}}>Total price: {`$${cartItem.order_products.singleProductTotalPrice}`}</p> */}
              <button style={{marginBottom: '1px'}, {marginTop:'-0.5rem'}, {marginLeft:'50rem'}}>Delete</button>
            </div>
            </div>
            )
            })}
        </ul>
        </div>
          <Link to="/home"> Continue to shop </Link>
        <div>Total Price: ${totalPrice}</div>
      </div>
   )
  }
}

const mapState = (state) => ({
  cart: state.cart
})

const mapDispatch = (dispatch) => ({
  getUserCart:(userId) => dispatch(getUserCartThunk(userId))
})

export default connect(mapState, mapDispatch)(UserCart)
