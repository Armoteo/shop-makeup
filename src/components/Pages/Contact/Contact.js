import React, { useState } from "react";
import ContactView from "./ContactView";

const Contact = () => {
  const [formContact, setFormContact] = useState({
    name: "",
    email: "",
    messages: "",
  });

  const getEmptyFormData = (formData) => {
    const emptyData = {};
    Object.keys(formData).forEach((key) => {
      emptyData[key] = "";
    });
    return emptyData;
  };

  const onChangeHandler = (event) => {
    setFormContact({ ...formContact, [event.target.name]: event.target.value });
  };

  const requestSubmit = () => {
    setFormContact(getEmptyFormData(formContact));
  };

  return <ContactView formContact={formContact} requestSubmit={requestSubmit} onChangeHandler={onChangeHandler} />;
};

export default Contact;
