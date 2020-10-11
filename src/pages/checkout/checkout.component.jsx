import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeButton from '../../components/stripe-button/stripe-button.component';
import {
  addItem,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart.actions';
import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selectors';
import './checkout.styles.scss';

const CheckoutPage = ({
  cartItems,
  total,
  clearItem,
  increaseItemQuantity,
  decreaseItemQuantity,
}) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((item) => (
      <CheckoutItem
        key={item.id}
        item={item}
        onClearItem={clearItem}
        onIncrease={increaseItemQuantity}
        onDecrease={decreaseItemQuantity}
      />
    ))}
    <div className='total'>
      <span>TOTAL: ${total}</span>
    </div>
    <div className='test-warning'>
      Use test credit card
      <br />
      4242 4242 4242 4242 CV: 123
      <br />
      ex. date: any? 01/21 works
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  increaseItemQuantity: (item) => dispatch(addItem(item)),
  decreaseItemQuantity: (item) => dispatch(removeItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
