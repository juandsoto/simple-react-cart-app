import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Header({ itemsQty }) {
  return (
    <header className='row'>
      <div className='col-9'>
        <h1>react shopping cart app</h1>
      </div>
      <div className='col-3'>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>{itemsQty}</span>
      </div>
    </header>
  );
}

export default Header;
