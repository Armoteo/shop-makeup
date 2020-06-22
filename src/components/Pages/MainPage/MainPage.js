import React from 'react'

import Layout from '../../Layout/Layout'
import MainPageView from './MainPageView'
import slide1 from '../../../assets/images/slide1.jpg'
import slide2 from '../../../assets/images/slide2.jpg'
import slide3 from '../../../assets/images/slide3.jpg'
import slide4 from '../../../assets/images/slide4.jpg'
import slide5 from '../../../assets/images/slide5.jpg'

class MainPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sliderData: [
        {
          imgName: 'Slide 1',
          urlImage: slide1,
          info: 'Sale 30%, buy now!',
          href: '/'
        },
        {
          imgName: 'Slide 2',
          urlImage: slide2,
          info: 'Sale 30%, buy now!',
          href: '/'
        },
        {
          imgName: 'Slide 3',
          urlImage: slide3,
          info: 'Sale 30%, buy now!',
          href: '/'
        },
        {
          imgName: 'Slide 4',
          urlImage: slide4,
          info: 'Sale 30%, buy now!',
          href: '/'
        },
        {
          imgName: 'Slide 5',
          urlImage: slide5,
          info: 'Sale 30%, buy now!',
          href: '/'
        },
      ]
    }
  }
  render() {
    const { sliderData } = this.state
    return (
      <Layout>
        <MainPageView sliderData={sliderData} />
      </Layout>
    )
  }
}

export default MainPage