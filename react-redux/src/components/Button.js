import React from 'react'
import PropTypes from 'prop-types';

const Button = ({children, primary, secondary, success, warning, danger, outline, rounded}) => {
  return (
    <button className='px-3 py-1 border border-blue-600 bg-blue-500 text-white'>{children}</button>
  )
}

Button.propTypes = {
    checkVarationValue : (props) => {
        console.log(props)

    }
}

export default Button