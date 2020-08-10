import React from 'react'
import PropTypes from 'prop-types'
import styles from '../../../sass/components/general/Input.module.scss'

const Input = ({ name, onChange, value, placeholder, type }) => {
  return (
    <input
      className={styles.input}
      type={type}
      name={name}
      onChange={onChange}
      value={value}
      placeholder={placeholder}
    />
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input