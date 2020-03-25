import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from './cart-icon.styles';


const CartIcon = ({ toggleCartHiddenAction, itemCount }) => (
  <CartContainer
    role="button"
    tabIndex="0"
    className="cart-icon"
    onClick={toggleCartHiddenAction}
    onKeyPress={toggleCartHiddenAction}
  >
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

CartIcon.propTypes = {
  toggleCartHiddenAction: PropTypes.func.isRequired,
  itemCount: PropTypes.number.isRequired,
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenAction: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
