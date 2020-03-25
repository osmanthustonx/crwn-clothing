import React from 'react';
import PropTypes from 'prop-types';

import {
  GroupContainer,
  FormInputContainer,
  FormInputLabel,
} from './form-input.styles';

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <GroupContainer>
    <FormInputContainer className="form-input" onChange={handleChange} {...otherProps} />
    {
      label
        ? (
          <FormInputLabel className={`${otherProps.value.length ? 'shrink' : ''}`}>
            {label}
          </FormInputLabel>
        )
        : null
    }
  </GroupContainer>
);

FormInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default FormInput;
