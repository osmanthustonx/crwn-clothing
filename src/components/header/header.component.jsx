import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { signOutStart } from '../../redux/user/user.actions';

import {
  HeaderContainer, LogoContainer, OptionsContainer, OptionLink,
} from './header.styles';

const Header = ({ currentUser, hidden, signOutStartAction }) => (
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
              onClick={signOutStartAction}
              onKeyPress={signOutStartAction}
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
  signOutStartAction: PropTypes.func.isRequired,
};

Header.defaultProps = {
  currentUser: null,
};

// createStructuredSelector will automatically pass are top level state
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStartAction: () => dispatch(signOutStart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
