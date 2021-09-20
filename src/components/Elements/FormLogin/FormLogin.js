import React from "react";
import PropTypes from "prop-types";
import Input from "../general/Input";
import Button from "../general/Button";
import styles from "../../../sass/components/elements/FormLogin.module.scss";

const FormLogin = ({ loginForm, onChange, login, errorMessage, openSignUpForm }) => {
  return (
    <div className={styles.container}>
      <h3>Login</h3>
      <div className={styles.inputContainer}>
        <Input value={loginForm.email} name="email" onChange={onChange} placeholder="Email" type="email" />
        <span className={errorMessage.email ? styles.error : styles.hide}>{errorMessage.email}</span>
        <Input value={loginForm.password} name="password" onChange={onChange} placeholder="Password" type="password" />
        <span className={errorMessage.password ? styles.error : styles.hide}>{errorMessage.password}</span>
      </div>
      <Button onClick={login} styleButton="submit">
        Submit
      </Button>
      <div className={styles.boxButton}>
        <Button onClick={openSignUpForm} styleButton="btnTransparent">
          Registration
        </Button>
        <Button onClick={login} styleButton="btnTransparent">
          Forgot password
        </Button>
      </div>
    </div>
  );
};

FormLogin.propTypes = {
  loginForm: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  errorMessage: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
  openSignUpForm: PropTypes.func.isRequired,
};

export default FormLogin;
