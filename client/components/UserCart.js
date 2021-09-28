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
      const userId = Number(this.props.params.id)
      this.props.getUserCart(userId)
    } catch (err) {
      console.log('🧤 err', err);

    }
  }

  render() {
    const cart = this.props.cart
    console.log('🧤 cart', cart);

    return (
      <div>
        <h1>Your cart items</h1>
      <div>
        <ul>
          {cart.map(cartItem => {
          return (
          <div className='cart-display'>
           <div >
            <img style={{width:'100px'}, {height:'80px'}} src={cartItem.imageUrl}/>
           </div>
           <div className='cart-item'>
             <p style={{margin:'0.5px'}, {marginBottom: '.5px'}}>{cartItem.name}</p>
             <p style={{marginTop:'1px'}, {margin:'0.5px'}}>{cartItem.species}</p>
             <p style={{marginTop:'1px'}}>{cartItem.price}</p>
             <p style={{marginBottom:'-0.5rem'}, {marginTop:'-0.5rem'}}>{cartItem.quantity}</p>
             <p style={{marginBottom: '1px'}, {marginTop:'-0.5rem'}, {marginLeft:'50rem'}}>Delete</p>
           </div>
          </div>
          )
          })}
       </ul>
      </div>
        <Link to="/home"> Continue to shop </Link>
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
