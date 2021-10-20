import React from 'react';

function Basket({ cartItems, onAdd, onRemove, onClear }) {
  const total = cartItems.reduce((acc, c) => acc + c.price * c.qty, 0);

  if (cartItems.length === 0) {
    return (
      <aside>
        <h2 className='bg-black p-2'>Cart Items</h2>
        <h4 className='text-danger'>cart is empty </h4>
      </aside>
    );
  }
  return (
    <aside className='cart'>
      <h2 className='bg-black p-2'>Cart Items</h2>
      {cartItems.map((item) => (
        <div
          key={item.id}
          className='row justify-content-center align-items-center'
        >
          <p className='col-4'>{item.name}</p>
          <div className='col-4'>
            <button
              className='btn btn-danger btn-sm me-3'
              onClick={() => onRemove(item)}
            >
              -
            </button>
            <button
              className='btn btn-success btn-sm'
              onClick={() => onAdd(item)}
            >
              +
            </button>
          </div>
          <p className='col-4'>
            {item.qty} - ${item.qty * item.price}
          </p>
        </div>
      ))}
      <hr />
      <div className='d-flex justify-content-around text-start'>
        <div>total</div>
        <div>$ {total}</div>
      </div>
      <button onClick={onClear} className='btn btn-danger mt-4 w-100'>
        clear cart
      </button>
      <button className='btn btn-warning mt-4 w-100'>checkout</button>
    </aside>
  );
}

export default Basket;
