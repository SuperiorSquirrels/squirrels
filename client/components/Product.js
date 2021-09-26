import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  const product = props.product;
  const id = product.id;
  return (
    <Link to={`/products/${id}`}>
      <div className="card">
        <img alt="Avatar" style={{width: '15rem'}} src={product.imageUrl}/>
        <div className="container">
          <div className="product-name">{product.name}</div>
          <div>{`$${product.price}`}</div>
          <div>
            {product.stock < 4
              ? `There are only ${product.stock} left!`
              : "In Stock"}
          </div>
        </div>
      </div>
    </Link>
  );
}
