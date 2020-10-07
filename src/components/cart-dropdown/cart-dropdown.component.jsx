import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((item) => (
        <span key={item.id}>
          {item.name} {item.quantity}
        </span>
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = (state) => ({ cartItems: state.cart.cartItems });

export default connect(mapStateToProps)(CartDropdown);
