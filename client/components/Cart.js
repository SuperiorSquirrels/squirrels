import React from 'react';
import {Link} from 'react-router-dom'

// a picture, name, species, price, quantity, and delete button
const dummyData = [
  {imageUrl:"https://image.shutterstock.com/image-vector/squirrel-silhouette-vectoricon-on-white-600w-1492691390.jpg" , name: 'a pet', species: 'kittycat', price: '$20', quantity: 10},
  {imageUrl:"https://image.shutterstock.com/image-vector/squirrel-silhouette-vectoricon-on-white-600w-1492691390.jpg" , name: 'another pet', species: 'adoggy', price: '$30', quantity: 1}
]

const Cart = () => {
  return (
    <div>
      <h1>Your cart items</h1>
    <div>
      <ul>
        {dummyData.map(data => {
          return (
          <div className='cart-display'>
           <div >
            <img style={{width:'100px'}, {height:'80px'}} src={data.imageUrl}/>
           </div>
           <div className='cart-item'>
             <p style={{margin:'0.5px'}, {marginBottom: '.5px'}}>{data.name}</p>
             <p style={{marginTop:'1px'}, {margin:'0.5px'}}>{data.species}</p>
             <p style={{marginTop:'1px'}}>{data.price}</p>
             <p style={{marginBottom:'-0.5rem'}, {marginTop:'-0.5rem'}}>{data.quantity}</p>
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

export default Cart
