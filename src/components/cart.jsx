import { Box, Heading, Image } from "@chakra-ui/react"
import React from "react"
import { useSelector } from "react-redux"
import Slider from "react-slick"


export const Cart=()=>{
    
    const [data]=useSelector((el)=>el.cartItem)
    console.log(data)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
    return(
        <Box>
            <Heading>My Cart Items</Heading>
            <Box>
                <Box>
                    <Box display='flex'>
                        <Box>
                           {
                            data&&<Heading fontSize={20}>{data.short}</Heading>
                           }
                           {
                            data&&<Heading fontSize={20}>{data.price-Math.ceil((data.price*data.discount/100))}</Heading>
                           }
                        </Box>
                        <Box>
                            <Slider {...settings}>
                                {
                                    data&&data.imageList?.map((el,ind)=>{
                                        return(
                                            <Box><Image src={el.input} key={ind} /></Box>
                                        )  
                                    })
                                }
                            </Slider>
                        </Box>
                    </Box>

                </Box>
                <Box>
                    
                </Box>
            </Box>
        </Box>
    )
}