import React from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

function BaseButton({
  icon,
  children,
  buttonProps,
  variant,
  color,
  type,
  ...rest
}) {
  return (
    <Box display="inline-block" position="relative" {...rest}>
      <Button color={color} variant={variant} type={type} {...buttonProps}>
        {icon && <Box component={Icon} children={icon} mr={1} />}
        {children}
      </Button>
    </Box>
  );
}

BaseButton.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
  variant: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  buttonProps: PropTypes.object
};

BaseButton.defaultProps = {
  variant: 'contained',
  color: 'primary',
  buttonProps: {}
};

export default BaseButton;
