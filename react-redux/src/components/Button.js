import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames'; // Install via `npm install classnames`

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...rest
}) => {
  const buttonClasses = classNames(
    'px-3 py-1 border font-medium text-center', // Base styles
    {
      'bg-blue-500 text-white border-blue-600': primary && !outline,
      'bg-gray-500 text-white border-gray-600': secondary && !outline,
      'bg-green-500 text-white border-green-600': success && !outline,
      'bg-yellow-500 text-white border-yellow-600': warning && !outline,
      'bg-red-500 text-white border-red-600': danger && !outline,
      'text-blue-500 border-blue-500 bg-white': primary && outline,
      'text-gray-500 border-gray-500 bg-white': secondary && outline,
      'text-green-500 border-green-500 bg-white': success && outline,
      'text-yellow-500 border-yellow-500 bg-white': warning && outline,
      'text-red-500 border-red-500 bg-white': danger && outline,
      'rounded-full': rounded, // Add rounded corners
      'rounded-md': !rounded, // Default rounded corners
    },
    className // Allow custom class overrides
  );

  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  children: PropTypes.node.isRequired,
  checkVariationValue: (props) => {
    const { primary, secondary, success, warning, danger } = props;
    const variations = [primary, secondary, success, warning, danger];
    const activeVariations = variations.filter(Boolean);
    if (activeVariations.length > 1) {
      return new Error(
        'Only one of primary, secondary, success, warning, or danger can be true at a time.'
      );
    }
  },
};

export default Button;
