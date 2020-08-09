import React from 'react'
import PropTypes from 'prop-types'

import styles from '../../../sass/components/general/Button.module.scss'

const Button = ({ children, onClick, styleButton }) => {
  return (
    <button
      className={`${styles.btn} ${styles[styleButton]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

Button.defaultProps = {
  styleButton: 'login',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  styleButton: PropTypes.string,
};