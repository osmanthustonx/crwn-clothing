import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.action';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHiddenAction }) => (
  <div
    role="button"
    tabIndex="0"
    className="cart-icon"
    onClick={toggleCartHiddenAction}
    onKeyPress={toggleCartHiddenAction}
  >
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

CartIcon.propTypes = {
  toggleCartHiddenAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHiddenAction: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(CartIcon);
