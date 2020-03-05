import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import './cart-dropdown.styles.scss';

const CartDropdown = ({ cartItemsState }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {
        cartItemsState.map((cartItem) => <CartItem key={cartItem.id} item={cartItem} />)
      }
    </div>
    <CustomButton type="button">GO TO CHECKOUT</CustomButton>
  </div>
);

CartDropdown.propTypes = {
  cartItemsState: PropTypes.arrayOf(PropTypes.object).isRequired,
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItemsState: cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
