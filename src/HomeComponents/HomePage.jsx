import React from 'react'
import { Box } from "@chakra-ui/react";
import "../App.css"
import "./HomePage.css"
import Carousel from 'react-bootstrap/Carousel';
import SlideComponents from './SlideComponents';




const HomePage = () => {
 


  return (
    <Box width="100%" mt='80px'>
      {/* <h1>Home Page</h1> */}
      <div className='homepage-main'>

        {/* CAROSEL DIV */}

        <div className='okati'>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="d-block w-100"
                src="https://cdna.lystit.com/cms/blackfriday_XL_2800_1050_23a75a1eaf.gif"
                alt="First slide"
                style={{ width: "100%" }}
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
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
          <SlideComponents />
        </div>

       
       <div className='product-types'>

           <div className='types-1'>
               <h1>1</h1>
               <h2>THE BIGGEST COLLECTION</h2>
               <p>Shop Over 12,000 brands and stores in one place</p>
               <p>Find exactly what you want with powerful search and personal recommendations</p>
           </div>

           <div className='types-1'>
               <h1>2</h1>
               <h2>THE HOTTEST PRODUCTS</h2>
               <p>See what's new and what's trending</p>
               <p>Hit the heart to recive alerts on the latest drops from your favourite brands</p>
           </div>

           <div className='types-1'>
               <h1>3</h1>
               <h2>THE BEST PRICCES</h2>
               <p>Compare prices and shippping options across thousands of stores</p>
               <p>Lyst members are notified when an item goes on sale</p>
           </div>

           <div className='types-2'>
             <h1>SIGN UP FOR SMARTER SHOPPING</h1>
             <p>JOIN</p>
           </div>

       </div>
        

            <div className='most-wanted'>
            <h1>MOST WANTED</h1>
            </div>

       <div className='most-wanted-1'>
            
            <div className='most-wanted-2'> 
                  <h1 style={{background:"tomato"}}>THE NORTH FACE </h1>
                   <h1 style={{background:"orange"}}>DENIM MULES</h1>
                   <h1 style={{background:"dodgerBlue"}}>BIRENSTOCK PAPILLIO SANDALS</h1>
                   <h1 style={{background:"mediumseagreen"}}>RALPH LAUREN WOMENS TUXEDO</h1>
                   <h1 style={{background:"slatblue"}}>LEOPARD PRINT FLATS</h1>

                   <h1 style={{background:"violet"}}>CONVERSE JACK PURCELL SNEAKERS</h1>
                   <h1 style={{background:"purple"}}>ADIDAS TERRES SHOES</h1>
                   <h1 style={{background:"olive"}}>NIKE STEFAN JANOSKI MAX SNEAKERS</h1>
                   <h1 style={{background:"lime"}}>RALPH LAUREN WOMENS TUXEDO</h1>
                   <h1 style={{background:"pink"}}>LEOPARD - PRINT SHIRTS</h1>
                   <h1 style={{background:"auamarine"}}>RAY BAN CLUMBMASTER</h1>
                    
            </div>
       </div>


       <div className='product-types'>
            <div className='product-types-1'>
              
                <div className='product-types-2' style={{background:"lightskyblue"}}>
                      <h1>WOMEN'S CLOTHING</h1>
                       <p>Suits</p>
                       <p>Coats</p>
                        <p>Jackets</p>
                         <p>Pants,Slacks and Chinos</p>
                         <p>Nightwear and sleepwear</p>
                         <p>Activement,gym and workout</p>
                         <p>CLothes</p>
                          <p>Linerie</p>
                </div>

                <div className='product-types-2' style={{background:"skyblue"}}>
                      <h1>MEN'S CLOTHING</h1>
                       <p>T-shirts</p>
                       <p>Coats</p>
                        <p>Jackets</p>
                         <p>Pants,Slacks and Chinos</p>
                         <p>Nightwear and sleepwear</p>
                         <p>Activement,gym and workout</p>
                         <p>Clothes</p>
                          <p>Beachwear</p>
                </div>

                <div className='product-types-2' style={{background:"dodgerBlue"}}>
                      <h1>WOMEN'S SHOES</h1>
                       <p>Heels</p>
                       <p>Boots</p>
                        <p>Sneakers</p>
                         <p>Flats and flat shoes</p>
                         
                </div>

                <div className='product-types-2' style={{background:"#659EC7"}}>
                      <h1>MEN'S SHOES</h1>
                       <p>Lace-ups</p>
                       <p>Boots</p>
                        <p>Sneakers</p>
                         <p>Slip-on shoes</p>
                         <p>Sandals,slides and flip flops</p>
                </div>


                <div className='product-types-2' style={{background:"#38ACEC"}}>
                      <h1>WOMEN'S ACCESSORIES</h1>
                       <p>Umbrellas</p>
                       <p>Watches</p>
                        <p>Gloves</p>
                         <p>Face masks</p>
                         <p>Scraves and mufflers</p>
                         <p>Phones cases</p>
                          <p>Sunglasses</p>
                          <p>Wallets and cardholders</p>
                </div>

                <div className='product-types-2' style={{background:"#00BFFF"}}>
                      <h1>MEN'S ACCESSORIES</h1>
                       <p>Ties</p>
                       <p>Cufflinks</p>
                        <p>Gloves</p>
                         <p>Face masks</p>
                         <p>Scraves and mufflers</p>
                         <p>Phones cases</p>
                          <p>Sunglasses</p>
                          <p>Wallets and cardholders</p>
                           <p>Watches</p>
                </div>


                <div className='product-types-2' style={{background:"#3BB9FF"}}>
                      <h1>WOMEN'S BAGS</h1>
                       <p>Luggage and suitcases</p>
                       <p>Briefcases and work bags</p>
                        <p>Belt bags, waist bags and fanny packs</p>
                         <p>Hobo bags and purses</p>
                         <p>Duffel bags and weekend bags</p>
                         <p>Top-handle bags</p>
                          <p>Crossbody bags and purses</p>
                          <p>Wallets and cardholders</p>
                          <p>Tote bags</p>
                </div>

                <div className='product-types-2' style={{background:"#5CB3FF"}}>
                      <h1>MEN'S BAGS</h1>
                       <p>Luggage and suitcases</p>
                       <p>Briefcases and laptop bags</p>
                        <p>Belt bags, waist bags and fanny packs</p>
                         <p>Pouches and Wristlets</p>
                         <p>Duffel bags and weekend bags</p>
                         <p>Messenger bagss</p>
                          <p>Cases</p>
                          <p>Backpacks</p>
                      
                </div>

                <div className='product-types-2' style={{background:"#79BAEC"}}>
                      <h1>WOMEN'S JEWELRY</h1>
                       <p>Necklaces</p>
                       <p>Bracelets</p>
                        <p>Brooches</p>
                         <p>Earnings and ear cuffs</p>
                         <p>Rings</p>
                  
                </div>

                <div className='product-types-2' style={{background:"#87CEEB"}}>
                      <h1>MEN'S JEWELRY</h1>
                       <p>Necklaces</p>
                       <p>Bracelets</p>
                        <p>Brooches</p>
                         <p>Earnings and ear cuffs</p>
                         <p>Rings</p>
                  
                </div>

            </div>
       </div>


      </div>

    </Box>

  )
}

export default HomePage
