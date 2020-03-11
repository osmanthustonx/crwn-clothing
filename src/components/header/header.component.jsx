import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import {
  HeaderContainer, LogoContainer, OptionsContainer, OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {
        currentUser
          ? (
            <OptionLink
              as="div"
              role="button"
              tabIndex="0"
              onClick={() => auth.signOut()}
              onKeyPress={() => auth.signOut()}
            >
              SIGN OUT
            </OptionLink>
          )
          : <OptionLink to="/signIn">SIGN IN</OptionLink>
      }
      <CartIcon />
    </OptionsContainer>
    {
      hidden ? null : <CartDropdown />
    }
  </HeaderContainer>
);

Header.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]),
  hidden: PropTypes.bool.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

// createStructuredSelector will automatically pass are top level state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
