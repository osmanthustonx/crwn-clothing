import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({
  children, type, isGoogleSign, ...otherProps
}) => (
  // eslint-disable-next-line react/button-has-type
  <button className={`${isGoogleSign ? 'google-sign-in' : ''} custom-button`} type={type} {...otherProps}>
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default CustomButton;
