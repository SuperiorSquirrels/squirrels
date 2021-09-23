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
  const random1 = Math.floor(Math.random() * 4)
  const random2 = Math.floor(Math.random() * (products.length - random1))
  console.log('🧤 random2', random2);

   return (
    <div style={{textAlign:'center'}}>
      <p style={{marginTop:'3rem'}}>
        Opps! The page at {location.pathname} does not exist.
      </p>
      <img className="sad-squirrel" src="https://live.staticflickr.com/7240/7265356576_d283619fc5_b.jpg" />
      <p>Here are some friendly furries that do exist</p>
      <div>
        {/* fix mapping  */}
          {products.filter((product, idx) => idx < random2).map((product) => (
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

