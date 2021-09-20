import React from "react";
import PropTypes from "prop-types";
import styles from "../../../sass/components/general/Input.module.scss";

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
  );
};

Input.defaultProps = {
  value: "",
  name: "",
  placeholder: "",
  type: "",
  onChange: () => {},
};

Input.propTypes = {
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Input;
