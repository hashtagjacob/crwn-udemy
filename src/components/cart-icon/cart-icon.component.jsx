import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCartHidden }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);