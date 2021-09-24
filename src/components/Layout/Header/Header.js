import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { menuItem, menuHeader } from "./components/HeaderMenuData";
import HeaderView from "./HeaderView";
import { submit, schemaModel } from "../../../utils/validation";
import { loginAction, logoutAction, registrationAction } from "../../../store/auth/actions";

const Header = () => {
  const { isAuth } = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  const history = useHistory();
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
      dispatch(
        loginAction({
          email: loginForm.email,
          password: loginForm.password,
        })
      );
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
      dispatch(
        registrationAction({
          email: signUpForm.email,
          password: signUpForm.password,
        })
      );
      close();
      clearForm();
    }
    handleError(resultValid);
  };

  const logout = () => {
    dispatch(logoutAction());
    history.push("/");
  };

  return (
    <HeaderView
      menuItem={menuItem}
      menuHeader={menuHeader}
      auth={isAuth}
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
      logout={logout}
    />
  );
};

export default Header;
