import React, { useState } from 'react'
import { menuItem, menuHeader } from './components/HeaderMenuData'
import HeaderView from './HeaderView'
import { submit, schemaModel } from '../../../../utils/validation'

const Header = () => {

  const [auth, setAuth] = useState(false)
  const [loginFormOpen, setLoginFormOpen] = useState(false)
  const [signUpFormOpen, setSignUpFormOpen] = useState(false)
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: ''
  })
  const [signUpForm, setSignUpForm] = useState({
    email: '',
    password: '',
    repeatPassword: ''
  })

  const [errorMessage, setErrorMessage] = useState({
    email: '',
    password: '',
    repeatPassword: ''
  })

  const getEmptyFormData = (formData) => {
    const emptyData = {};
    Object.keys(formData).forEach((key) => { emptyData[key] = ''; });
    return emptyData;
  };

  const close = () => {
    setLoginFormOpen(false)
    setSignUpFormOpen(false)
  }

  const openLoginForm = () => {
    close()
    setLoginFormOpen(true)
  }

  const openSignUpForm = () => {
    close()
    setSignUpFormOpen(true)
  }

  const resetLoginForm = () => {
    setLoginForm({
      email: '',
      password: ''
    });
  };

  const handleFormLogin = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value })
  }

  const handleFormSignUp = (event) => {
    setSignUpForm({ ...signUpForm, [event.target.name]: event.target.value })
  }

  const clearErrorMesage = () => {
    setErrorMessage(getEmptyFormData(errorMessage));
  };

  const clearForm = () => {
    setLoginForm(getEmptyFormData(loginForm))
    setSignUpForm(getEmptyFormData(signUpForm))
  }

  const handleError = (results) => {
    if (results !== true) {
      const clearMessage = getEmptyFormData(errorMessage);
      setErrorMessage({ ...clearMessage, [results.path]: results.message });
    } else {
      resetLoginForm();
      clearErrorMesage();
    }
  };

  const login = () => {

  }

  const signUp = async () => {
    const schema = schemaModel('signUp');
    const resultValid = await submit(schema, signUpForm);
    if (resultValid.message === undefined) {
      close()
      clearForm()
    }
    handleError(resultValid);
  }

  return (
    <HeaderView
      menuItem={menuItem}
      menuHeader={menuHeader}
      auth={auth}
      loginFormOpen={loginFormOpen}
      openLoginForm={openLoginForm}
      close={close}
      loginForm={loginForm}
      handleFormLogin={handleFormLogin}
      login={login}
      errorMessage={errorMessage}
      signUpForm={signUpForm}
      signUp={signUp}
      handleFormSignUp={handleFormSignUp}
      openSignUpForm={openSignUpForm}
      signUpFormOpen={signUpFormOpen}
    />
  )

}

export default Header