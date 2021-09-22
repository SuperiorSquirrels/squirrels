import React from 'react'
import { connect } from 'react-redux'
import { fetchProducts } from '../store/products'

class AllProducts extends React.Component {
  componentDidMount() {
    this.props.fetchProducts()
  }

  render() {
    return (
      <div>
        {this.props.products.map(product => {
          <div key={product.id}>
            <ima src={product.imageUrl} />
            <div>{product.name}</div>
            <div>{product.species}</div>
          </div>
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
