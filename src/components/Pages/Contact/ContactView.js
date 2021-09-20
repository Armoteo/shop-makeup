import React from "react";
import PropTypes from "prop-types";
import styles from "../../../sass/components/pages/Contact.module.scss";
import Input from "../../Elements/general/Input";
import Button from "../../Elements/general/Button";

const ContactView = ({ onChangeHandler, formContact, requestSubmit }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.contactUs}>
          <div className={styles.formContact}>
            <h3>Contact US</h3>
            <Input
              name="name"
              onChange={onChangeHandler}
              value={formContact.name}
              placeholder="Enter Your Name"
              type="text"
            />
            <Input
              name="email"
              onChange={onChangeHandler}
              value={formContact.email}
              placeholder="Enter Your Email"
              type="email"
            />
            <textarea
              className={styles.textArea}
              name="messages"
              onChange={onChangeHandler}
              value={formContact.messages}
              placeholder="Enter Your Messages"
              maxLength="256"
            />
            <Button onClick={requestSubmit} styleButton="submit">
              Request More Information
            </Button>
          </div>
        </div>
        <div className={styles.moreInfo}>
          <h3>Need more info?</h3>
          <span>Or want to place an order? That&aposs great! Give us a call or send us an email.</span>
          <span>
            <i className="fas fa-phone" />
            +38(063)000-00-00
          </span>
          <span>
            <i className="fas fa-envelope" />
            infoAnnetShop@gmail.com
          </span>
        </div>
      </div>
    </div>
  );
};

ContactView.defaultProps = {
  onChangeHandler: () => {},
  requestSubmit: () => {},
  formContact: {},
};

ContactView.propTypes = {
  onChangeHandler: PropTypes.func,
  requestSubmit: PropTypes.func,
  formContact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    messages: PropTypes.string,
  }),
};

export default ContactView;
