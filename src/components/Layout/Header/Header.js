import React, { useState } from "react";
import { menuItem, menuHeader } from "./components/HeaderMenuData";
import HeaderView from "./HeaderView";
import { submit, schemaModel } from "../../../utils/validation";

const Header = () => {
  // const [auth, setAuth] = useState(false);
  const [loginFormOpen, setLoginFormOpen] = useState(false);
  const [signUpFormOpen, setSignUpFormOpen] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    email: "",
    password: "",
    repeatPassword: "",
  });

  // useEffect(() => {
  //   if (token) {
  //     setAuth(true);
  //   } else {
  //     setAuth(false);
  //   }
  // }, [token]);

  const getEmptyFormData = (formData) => {
    const emptyData = {};
    Object.keys(formData).forEach((key) => {
      emptyData[key] = "";
    });
    return emptyData;
  };

  const clearErrorMesage = () => {
    setErrorMessage(getEmptyFormData(errorMessage));
  };

  const clearForm = () => {
    setLoginForm(getEmptyFormData(loginForm));
    setSignUpForm(getEmptyFormData(signUpForm));
  };

  const handleError = (results) => {
    if (results !== true) {
      const clearMessage = getEmptyFormData(errorMessage);
      setErrorMessage({ ...clearMessage, [results.path]: results.message });
    } else {
      clearForm();
      clearErrorMesage();
    }
  };

  const close = () => {
    clearForm();
    clearErrorMesage();
    setLoginFormOpen(false);
    setSignUpFormOpen(false);
  };

  const openLoginForm = () => {
    close();
    setLoginFormOpen(true);
  };

  const openSignUpForm = () => {
    close();
    setSignUpFormOpen(true);
  };

  const handleFormLogin = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const handleFormSignUp = (event) => {
    setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value });
  };

  const loginSubmit = async () => {
    const schema = schemaModel("login");
    const resultValid = await submit(schema, loginForm);
    if (resultValid.message === undefined) {
      close();
      clearForm();
    }
    handleError(resultValid);
  };

  const signUp = async () => {
    const schema = schemaModel("signUp");
    const resultValid = await submit(schema, signUpForm);
    const form = signUpForm;
    delete form.repeatPassword;

    if (resultValid.message === undefined) {
      close();
      clearForm();
    }
    handleError(resultValid);
  };

  return (
    <HeaderView
      menuItem={menuItem}
      menuHeader={menuHeader}
      // auth={auth}
      loginFormOpen={loginFormOpen}
      openLoginForm={openLoginForm}
      close={close}
      loginForm={loginForm}
      handleFormLogin={handleFormLogin}
      login={loginSubmit}
      errorMessage={errorMessage}
      signUpForm={signUpForm}
      signUp={signUp}
      handleFormSignUp={handleFormSignUp}
      openSignUpForm={openSignUpForm}
      signUpFormOpen={signUpFormOpen}
    />
  );
};

export default Header;
