import React, { useState } from 'react';

import { products } from './products';

import Basket from './Components/Basket';
import Header from './Components/Header';
import Products from './Components/Products';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, qty: exists.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...exists, qty: exists.qty - 1 } : item
        )
      );
    }
  };

  const onClear = () => {
    setCartItems([]);
  };

  return (
    <>
      <Header itemsQty={cartItems.reduce((acc, item) => acc + item.qty, 0)} />
      <div className='m-4'>
        <div className='row'>
          <div className='col-12 col-md-6 col-xl-8 col-xxl-9'>
            <Products products={products} onAdd={onAdd} />
          </div>
          <div className='col-12 col-md-6 col-xl-4 col-xxl-3'>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onClear={onClear}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
