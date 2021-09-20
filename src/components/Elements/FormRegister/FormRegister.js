import React from "react";
import PropTypes from "prop-types";
import Input from "../general/Input";
import Button from "../general/Button";
import styles from "../../../sass/components/elements/FormRegister.module.scss";

const FormRegister = ({ signUpForm, signUp, onChange, loginOpen, errorMessage }) => {
  return (
    <div className={styles.container}>
      <h3>Register</h3>
      <div className={styles.inputContainer}>
        <Input value={signUpForm.email} name="email" onChange={onChange} placeholder="Email" type="email" />
        <span className={errorMessage.email ? styles.error : styles.hide}>{errorMessage.email}</span>
        <Input value={signUpForm.password} name="password" onChange={onChange} placeholder="Password" type="password" />
        <span className={errorMessage.password ? styles.error : styles.hide}>{errorMessage.password}</span>
        <Input
          value={signUpForm.repeatPassword}
          name="repeatPassword"
          onChange={onChange}
          placeholder="Repeat Password"
          type="password"
        />
        <span className={errorMessage.repeatPassword ? styles.error : styles.hide}>{errorMessage.repeatPassword}</span>
      </div>
      <Button onClick={signUp} styleButton="submit">
        Submit
      </Button>
      <div className={styles.boxButton}>
        <Button onClick={loginOpen} styleButton="btnTransparent">
          Login
        </Button>
      </div>
    </div>
  );
};

FormRegister.propTypes = {
  signUpForm: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
    repeatPassword: PropTypes.string,
  }).isRequired,
  errorMessage: PropTypes.shape({
    repeatPassword: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  signUp: PropTypes.func.isRequired,
  loginOpen: PropTypes.func.isRequired,
};

export default FormRegister;
