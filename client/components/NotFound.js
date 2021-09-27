import React from 'react';
import {useLocation} from 'react-router-dom';
import Product from "./Product";
import { connect } from "react-redux";
import { fetchProducts } from "../store/products"
// const products = this.props.products || [];
// return (
//   <div>
//     {products.map((product) => (
//       <Product key={product.id} product={product} />
//     ))}
//   </div>
// );
// }


class NotFound extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
  const products = this.props.products || [];
  let uniqueRandoms = [];
  // generate three random indexes
  const generateIdxes = () => {
    const randomNumGen = () =>{
      return Math.floor(Math.random() * products.length)
    }
    while(uniqueRandoms.length < 3){
      let newIdx = randomNumGen()
      if (uniqueRandoms.indexOf(newIdx) === -1){
        uniqueRandoms.push(newIdx)
      }
    }
  }
  if(products.length > 1){
    generateIdxes()
  }
   return (
    <div style={{textAlign:'center'}}>
      <p style={{marginTop:'3rem'}}>
        Opps! The page at {location.pathname} does not exist.
      </p>
      <img className="sad-squirrel" src="https://live.staticflickr.com/7240/7265356576_d283619fc5_b.jpg" />
      <p>Here are some friendly furries that do exist</p>
      <div className="all-products">
          {products.filter((product, idx) => uniqueRandoms.includes(idx)).map((product) => (
            <Product key={product.id} product={product} />
          ))}
      </div>

    </div>
  )
}
}

const mapStateToProps = (state) => ({
  products: state.products,
});

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);

