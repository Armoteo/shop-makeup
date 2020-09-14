import * as yup from 'yup';

const schemaLogin = yup.object().shape({
  email: yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  password: yup.string()
    .required('Password is required')
    .min(8, 'Too short password')
});

const schemaSignUp = yup.object().shape({
  email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: yup.string()
    .min(8, 'Too short repeat password')
    .required('Required'),
  repeatPassword: yup.string()
    .min(8, 'Too short repeat password')
    .required('Required'),
});

const schemaForgotPassword = yup.object().shape({
  email: yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});

export const schemaModel = (typeSubmit) => {
  switch (typeSubmit) {
    case 'login':
      return schemaLogin;
    case 'signUp':
      return schemaSignUp;
    case 'forgotPassword':
      return schemaForgotPassword;

    default:
      return '';
  }
};

export const submit = async (schema, formObj) => {
  let resultValid;
  resultValid = await schema.isValid(formObj);
  if (!resultValid) {
    resultValid = await schema.validate(formObj).catch((err) => {
      return err;
    });
  }
  return resultValid;
};
