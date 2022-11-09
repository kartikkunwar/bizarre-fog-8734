import React from 'react'
import {Box} from "@chakra-ui/react";
import "../App.css"
import Carousel from 'react-bootstrap/Carousel';
import SlideComponents from './SlideComponents';



const HomePage = () => {
  return (        
   <Box width="100%">
    {/* <h1>Home Page</h1> */}
       <div className='homepage-main'>
    
                     {/* CAROSEL DIV */}

            <div className='okati'>
            <Carousel>
      <Carousel.Item interval={1000}>
        <img
          className="d-block w-100"
          src="https://cdna.lystit.com/cms/blackfriday_XL_2800_1050_23a75a1eaf.gif"
          alt="First slide" 
          style={{width:"100%"}}
        />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="d-block w-100"
          src="https://cdna.lystit.com/cms/DESKTOP_XL_292112190c.png"
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>
            </div>
                          {/* 2nd div */}

                          <div className='rendu'>
                            <SlideComponents/>
                          </div>

                          {/* Breakout Brands */}
                        
                    

           
       </div>
       
   </Box>
  
  )
}

export default HomePage
