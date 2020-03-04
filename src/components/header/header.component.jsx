import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACT</Link>
      {
        currentUser
          ? (
            <div
              role="button"
              tabIndex="0"
              className="option"
              onClick={() => auth.signOut()}
              onKeyPress={() => auth.signOut()}
            >
              SIGN OUT
            </div>
          )
          : <Link className="option" to="/signIn">SIGN IN</Link>
      }
      <CartIcon />
    </div>
    {
      hidden ? null : <CartDropdown />
    }
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]),
  hidden: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
