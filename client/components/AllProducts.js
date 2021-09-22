import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/products'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    const products = this.props.products || [];
    console.log('.......', products)
    return (
      <div>
        {products.map(product => {
          return (
          <div key={product.id}>
            <img src={product.imageUrl} />
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>{product.stock < 4 ? `There are only ${product.stock} left!` : product.stock}</div>
          </div> )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products
})

const mapDispatchToProps = dispatch => ({
  fetchProducts: () => dispatch(fetchProducts())
})

export default connect(mapStateToProps, mapDispatchToProps)(AllProducts)
