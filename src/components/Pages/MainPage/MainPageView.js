import React from 'react'
import PropTypes from 'prop-types';
import styles from '../../../sass/components/pages/MainPage.module.scss'
import Slider from '../../Elements/Slider/Slider'
import Card from '../../Elements/Card/Card';

const MainPageView = ({ sliderData, bestSellers, data, onClickCardBtn }) => {

  return (
    <div className={styles.container}>
      <div className={styles.wrapperContent}>
        <Slider sliderData={sliderData} />
        <h3>Best sellers</h3>
        <div className={styles.bestSellers}>
          {bestSellers.map(item => {
            return <Card
              id={item.id}
              url={item.urlImage}
              name={item.name}
              price={item.price}
              onClick={onClickCardBtn}
              key={item.id}
            />
          })}
        </div>
        <div className={styles.line} />
        <h3>Best offer</h3>
        <div className={styles.product}>
          {data.map(item => {
            return <Card
              id={item.id}
              url={item.urlImage}
              name={item.name}
              price={item.price}
              onClick={onClickCardBtn}
              key={item.id}
            />
          })}
        </div>
        <div className={styles.pageButton}>
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    </div>
  )
}

export default MainPageView

MainPageView.propTypes = {
  sliderData: PropTypes.array.isRequired,
  bestSellers: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  onClickCardBtn: PropTypes.func.isRequired,
};