import React from 'react'
import PropTypes from 'prop-types'
import Input from '../general/Input'

import styles from '../../../sass/components/elements/FormLogin.module.scss'
import Button from '../general/Button'

const FormLogin = ({ loginForm, onChange, login }) => {
  return (
    <div className={styles.container}>
      <h3>Login</h3>
      <div className={styles.inputContainer}>
        <Input
          value={loginForm.email}
          name="email"
          onChange={onChange}
          placeholder="Email"
          type="email"
        />
        <Input
          value={loginForm.password}
          name="password"
          onChange={onChange}
          placeholder="Password"
          type="password"
        />
      </div>
      <Button
        onClick={login}
        styleButton="submit"
      >
        Submit
      </Button>
      <div className={styles.boxButton}>
        <Button
          onClick={login}
          styleButton="btnTransparent"
        >
          Registration
      </Button>
        <Button
          onClick={login}
          styleButton="btnTransparent"
        >
          Forgot password
      </Button>
      </div>
    </div>
  )
}

FormLogin.propTypes = {
  loginForm: PropTypes.shape({}).isRequired,
  onChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};

export default FormLogin