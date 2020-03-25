import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles';

const SignIn = ({ emailSignInStartAction, googleSignInStartAction }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });
  const { email, password } = userCredentials;

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailSignInStartAction(email, password);
  };

  const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password.</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          inputMode="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="password"
          required
        />
        <ButtonsBarContainer>
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInStartAction}
            isGoogleSignIn
          >
              Sign in with Google
          </CustomButton>
        </ButtonsBarContainer>
      </form>
    </SignInContainer>
  );
};

SignIn.propTypes = {
  googleSignInStartAction: PropTypes.func.isRequired,
  emailSignInStartAction: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  googleSignInStartAction: () => dispatch(googleSignInStart()),
  emailSignInStartAction: (email, password) => dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
