import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className='collection-footer'>
      <span>{name}</span>
      <span>{price}</span>
    </div>
    <CustomButton className='custom-button' inverted>
      add to cart
    </CustomButton>
  </div>
);
export default CollectionItem;
