import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className='cart-item'>
    <img src={imageUrl} alt={name} />
    <div className='item-details'>
      <span>{name}</span>
      <span>
        {quantity} x ${price}
      </span>
    </div>
  </div>
);

export default CartItem;
