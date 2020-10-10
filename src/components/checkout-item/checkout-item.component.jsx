import React from 'react';
import './checkout-item.styles.scss';

const CheckoutItem = ({ item, onClearItem, onIncrease, onDecrease }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='item' src={imageUrl} />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => onDecrease(item)}>
          &#10094;
        </div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={() => onIncrease(item)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => onClearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
