import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';

const Header = (props) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">SHOP</Link>
      <Link className="option" to="/shop">CONTACT</Link>
      {/* <Link className="option" to="/shop">SHOP</Link> */}
    </div>
  </div>
);

Header.propTypes = {

};

export default Header;
