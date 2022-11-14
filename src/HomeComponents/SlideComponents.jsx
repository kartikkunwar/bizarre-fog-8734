import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { breakoutBrands, hotRightNow, lystSeller, lystSellerTwo, trendngNow } from './data';
import "./SlideComponents.css"
import { Link } from 'react-router-dom';

const SlideComponents = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className='slide-container'>
      <div className='App-details'>
        <Slider {...settings}>
          {lystSeller.map((item) => (
            <Link to='/product'><div className='card'>
              <div className='card-top'>
                <img src={item.image} alt={item.title} style={{ height: "500px" }} />
              </div>
              <div className='card-bottom'>
                <h1>{item.title}</h1>
              </div>
            </div></Link>
          ))}
        </Slider>
      </div>

      <div className='App-details-1'>
        <Slider {...settings}>
          {lystSellerTwo.map((item) => (
            <Link to='/product'><div className='card'>
              <div className='card-top'>
                <img src={item.image} alt={item.title} style={{ height: "500px" }} />
              </div>
              <div className='card-bottom'>
                <h1>{item.title}</h1>
              </div>
            </div></Link>
          ))}
        </Slider>
      </div>

      <div className='App-details-2'>
        <h1>BREAKOUT BRANDS</h1>
        <Slider {...settings}>
          {breakoutBrands.map((item) => (
            <Link to='/product'><div className='card'>
              <div className='card-bottom'>
                <h1>{item.title}</h1>
              </div>
              <div className='card-top'>
                <img src={item.image} alt={item.title} style={{ height: "400px" }} />
              </div>

            </div></Link>
          ))}
        </Slider>
      </div>
      {/* BREAKOUT TRENDS */}
      <div className='App-details-2'>
        <h1>BREAKOUT BRANDS</h1>
        <Slider {...settings}>
          {breakoutBrands.map((item) => (
            <Link to='/product'><div className='card'>
              <div className='card-bottom'>
                <h1>{item.title}</h1>
              </div>
              <div className='card-top'>
                <img src={item.image} alt={item.title} style={{ height: "400px" }} />
              </div>

            </div></Link>
          ))}
        </Slider>
      </div>

      <div className='App-details-2'>
        <h1>TRENDING NOW</h1>
        <Slider {...settings}>
          {trendngNow.map((item) => (
            <Link to='/product'><div className='card'>
              <div className='card-bottom'>
                <h1>{item.title}</h1>
              </div>
              <div className='card-top'>
                <img src={item.image} alt={item.title} style={{ height: "400px" }} />
              </div>

            </div></Link>
          ))}
        </Slider>
      </div>

      <div className='App-details-2'>
        <h1>HOT RIGHT NOW</h1>
        <Slider {...settings}>
          {hotRightNow.map((item) => (
            <Link to='/product'><div className='card'>
              <div className='card-bottom'>
                <h1>{item.title}</h1>
              </div>
              <div className='card-top'>
                <img src={item.image} alt={item.title} style={{ height: "400px" }} />
              </div>

            </div></Link>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default SlideComponents
