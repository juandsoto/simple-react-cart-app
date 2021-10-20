import React from 'react';
import Product from './Product';

function Products({ products, onAdd }) {
  return (
    <main>
      <h2 className='bg-black p-2'>Products</h2>
      <div className='row'>
        {products.map((product) => (
          <div key={product.id} className='col-12 col-xl-6 col-xxl-4 card mb-4'>
            <Product product={product} onAdd={onAdd} />
          </div>
        ))}
      </div>
    </main>
  );
}

export default Products;
