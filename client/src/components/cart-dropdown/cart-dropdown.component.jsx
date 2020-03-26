import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from './cart-dropdown.styles';


const CartDropdown = ({ cartItemsState, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItemsState.length
          ? cartItemsState.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
          : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CartDropdownButton
      type="button"
      onClick={() => {
        console.log('----------------------------');
        
        history.push('/checkout');
        dispatch(toggleCartHidden());
      }}
    >
        GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

CartDropdown.propTypes = {
  cartItemsState: PropTypes.arrayOf(PropTypes.object).isRequired,
  history: PropTypes.shape({
    length: PropTypes.number,
    push: PropTypes.func,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  cartItemsState: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
