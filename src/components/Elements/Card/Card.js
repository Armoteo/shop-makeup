import React from "react";
import PropTypes from "prop-types";
import styles from "../../../sass/components/elements/Card.module.scss";

const Card = ({ id, url, name, price, onClick }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={url} alt={name} />
      <div className={styles.infoContainer}>
        <span>{name}</span>
        <span>{price} $</span>
        <a href="/" onClick={() => onClick(id)}>
          Add to cart
        </a>
      </div>
    </div>
  );
};
export default Card;

Card.propTypes = {
  id: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
