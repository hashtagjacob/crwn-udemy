import React from 'react';
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { toggleHidden } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemsCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleHidden()),
});

const mapStateToProps = ({ cart: { cartItems } }) => ({
  itemsCount: cartItems.reduce(
    (accumulated, current) => accumulated + current.quantity,
    0
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
