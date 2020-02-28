import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = ({ currentUser }) => (
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
    </div>
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]),
};

Header.defaultProps = {
  currentUser: null,
};

export default Header;
