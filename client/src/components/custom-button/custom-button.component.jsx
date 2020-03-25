/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);

CustomButton.propTypes = {
  props: PropTypes.objectOf(PropTypes.object),
  type: PropTypes.string.isRequired,
  isGoogleSign: PropTypes.bool,
  inverted: PropTypes.bool,
  children: PropTypes.string.isRequired,
};

CustomButton.defaultProps = {
  props: undefined,
  isGoogleSign: undefined,
  inverted: undefined,
};

export default CustomButton;
