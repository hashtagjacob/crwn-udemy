import React from "react";
import "./cart-icon.styles.scss";

import { toggleHidden } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import {
  CartIconContainer,
  ItemCountSpan,
  StyledShoppingIcon,
} from "./cart-icon.styles";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <StyledShoppingIcon />
    <ItemCountSpan>{itemsCount}</ItemCountSpan>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemsCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
