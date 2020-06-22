import React from 'react'
import PropTypes from 'prop-types';
import styles from '../../../sass/components/pages/MainPage.module.scss'
import Slider from '../../Elements/Slider/Slider'

const MainPageView = ({ sliderData }) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapperContent}>
        <Slider sliderData={sliderData} />
      </div>
    </div>
  )
}

export default MainPageView

MainPageView.propTypes = {
  sliderData: PropTypes.array.isRequired,
};