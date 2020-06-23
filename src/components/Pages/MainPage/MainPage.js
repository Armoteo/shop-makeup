import React from 'react'

import Layout from '../../Layout/Layout'
import MainPageView from './MainPageView'
import slide1 from '../../../assets/images/slide1.jpg'
import slide2 from '../../../assets/images/slide2.jpg'
import slide3 from '../../../assets/images/slide3.jpg'
import slide4 from '../../../assets/images/slide4.jpg'
import slide5 from '../../../assets/images/slide5.jpg'
import shop1 from '../../../assets/images/shop1.jpg'
import shop2 from '../../../assets/images/shop2.jpg'
import shop3 from '../../../assets/images/shop3.jpg'

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
      ],
      data: [
        {
          id: '1',
          name: 'Eyelash extensions',
          price: '15',
          urlImage: shop1
        },
        {
          id: '2',
          name: 'Eyelash extensions',
          price: '18',
          urlImage: shop2
        },
        {
          id: '3',
          name: 'Eyelash extensions',
          price: '15',
          urlImage: shop3
        },
        {
          id: '4',
          name: 'Eyelash extensions',
          price: '15',
          urlImage: shop2
        },
        {
          id: '5',
          name: 'Eyelash extensions',
          price: '18',
          urlImage: shop1
        },
        {
          id: '6',
          name: 'Eyelash extensions',
          price: '15',
          urlImage: shop3
        },
      ],

    }
  }

  bestSellers = () => {
    const { data } = this.state
    return data.slice(0, 3)
  }

  onClickCardBtn = (id) => {
    console.log(id)
  }

  render() {
    const { sliderData, data } = this.state
    return (
      <Layout>
        <MainPageView
          sliderData={sliderData}
          bestSellers={this.bestSellers()}
          data={data}
          onClickCardBtn={this.onClickCardBtn}
        />
      </Layout>
    )
  }
}

export default MainPage