import React from 'react';

function Product({ product, onAdd }) {
  const { name, img, price, description } = product;
  return (
    <>
      <img src={img} alt={name} className='img-fluid card-img-top' />
      <div className='my-4'>
        <h3 className='card-title'>{name}</h3>
        <p className='card-text'>{description}</p>
        <div className='card-subtitle'>${price}</div>
      </div>
      <button onClick={() => onAdd(product)} className='btn btn-primary'>
        add to cart
      </button>
    </>
  );
}

export default Product;
