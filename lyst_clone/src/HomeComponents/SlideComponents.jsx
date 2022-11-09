import React from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {  breakoutBrands, lystSeller, lystSellerTwo } from './data';
import "./SlideComponents.css"

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
        {lystSeller.map((item)=>(     
        <div className='card'>
         <div className='card-top'>
            <img src={item.image} alt={item.title} style={{height:"500px"}}/>
         </div>
         <div className='card-bottom'>
            <h1>{item.title}</h1>
         </div>
        </div>
      ))}
        </Slider>     
     </div>

     <div className='App-details-1'>
        <Slider {...settings}>
        {lystSellerTwo.map((item)=>(     
        <div className='card'>
         <div className='card-top'>
            <img src={item.image} alt={item.title} style={{height:"500px"}}/>
         </div>
         <div className='card-bottom'>
            <h1>{item.title}</h1>
         </div>
        </div>
      ))}
        </Slider>     
     </div>

     <div className='App-details-2'>
       <h1>BREAKOUT BRANDS</h1>
        <Slider {...settings}>
        {breakoutBrands.map((item)=>(     
        <div className='card'>
          <div className='card-bottom'>
            <h1>{item.title}</h1>
         </div>
         <div className='card-top'>
            <img src={item.image} alt={item.title} style={{height:"400px"}}/>
         </div>
         
        </div>
      ))}
        </Slider>     
     </div>
     <div className='App-details-2'>
       <h1>BREAKOUT BRANDS</h1>
        <Slider {...settings}>
        {breakoutBrands.map((item)=>(     
        <div className='card'>
          <div className='card-bottom'>
            <h1>{item.title}</h1>
         </div>
         <div className='card-top'>
            <img src={item.image} alt={item.title} style={{height:"400px"}}/>
         </div>
         
        </div>
      ))}
        </Slider>     
     </div>
     </div> 
  )
}

export default SlideComponents
