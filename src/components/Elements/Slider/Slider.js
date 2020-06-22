import React from 'react'
import PropTypes from 'prop-types';
import styles from '../../../sass/components/elements/Slider.module.scss'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      slideCount: 0
    }
  }

  componentDidMount() {
    setInterval(() => {
      this.sliderShow()
    }, 5000)
  }


  sliderShow = (count) => {
    const { sliderData } = this.props
    const { slideCount } = this.state
    let newSlideCount = count !== undefined ? count : slideCount + 1
    if (newSlideCount === sliderData.length) {
      newSlideCount = 0
    }
    this.setState({ slideCount: newSlideCount })
  }

  render() {
    const { sliderData } = this.props
    const { slideCount } = this.state
    return (
      <div className={styles.container}>
        <div className={styles.sliderContent}>
          {sliderData.map((item, index) => {
            if (index === slideCount) {
              return <img
                src={item.urlImage}
                alt={item.imgName}
                key={index}
                className={`${styles.slideActive}`}
              />
            } else {
              return <img
                src={item.urlImage}
                alt={item.imgName}
                key={index}
              />
            }
          })}
        </div>
        <div className={styles.dotBar}>
          {sliderData.map((item, index) => {
            if (index === slideCount) {
              return <div
                className={`${styles.dot} ${styles.active}`}
                key={index}
                onClick={() => this.sliderShow(index)}
              ></div>
            } else {
              return <div
                className={styles.dot}
                key={index}
                onClick={() => this.sliderShow(index)}
              ></div>
            }
          })}
          <span>{sliderData[slideCount].info}</span>
          <a href={sliderData[slideCount].href}>purchase</a>
        </div>
      </div>
    )
  }
}

export default Slider

Slider.propTypes = {
  sliderData: PropTypes.array.isRequired,
};