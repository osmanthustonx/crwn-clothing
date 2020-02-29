/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({
  children, type, isGoogleSign, ...otherProps
}) => (
  <button className={`${isGoogleSign ? 'google-sign-in' : ''} custom-button`} type={type} {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  isGoogleSign: PropTypes.bool,
};

CustomButton.defaultProps = {
  isGoogleSign: undefined,
};

export default CustomButton;
