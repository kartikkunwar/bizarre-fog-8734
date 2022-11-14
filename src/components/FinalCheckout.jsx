import { Box, Input,Button,Text, } from '@chakra-ui/react'

import React from 'react'
import { Footer } from './footer'
import { Navbar } from './navbar'

 const FinalCheckout = () => {
 const handelpayment=()=>{
    alert ("your order has been placed")
    
 }
  return [
    <Navbar/>,
    <Box  h='650px' bg='#FBF1C1'  mt='80px'>
               <Box
                    p={5} 
                    height={"500px"}
                    margin={"auto"}
                    width={"350px"}
                    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px" bg='#FDFBFF'
               >
                    <Box border='1px solid black'
                         display={"flex"}
                         justifyContent={"space-between"}
                         p={5}
                         backgroundColor="#D2E5DB"
                         height={"150px"}
                         alignItems={"center"}
                    >
                         <Box
                              display={"flex"}
                              alignItems={"center"}
                              width={"80px"}
                              backgroundColor={"#D2E5DB"}
                              height={"80px"}
                              p={2}
                         >
                             
                         </Box>
                         <Box mr={"80px"} height={"70px"} p={2}>
                              <Text color={"black"} fontWeight={"bold"}>
                                   Card Details
                              </Text>
                                
                         </Box>
                    </Box>
                    <Text textAlign={"left"} p={5}>
                         Enter Card Details
                    </Text>
                    <Box display={"flex"} gap={"5px"}>
                         <Input
                              borderBottom={"1px solid black"}
                              placeholder="Card Number"
                              name="cardNumber"
                              value={"cardNumber"}
                            //   onChange={(e) => setCardNumber(e.target.value)}
                              textDecoration={"none"}
                              borderRadius={"none"}
                              width={"60%"}
                         />
                         <Input
                              borderBottom={"1px solid black"}
                              placeholder="Expiry"
                              textDecoration={"none"}
                              borderRadius={"none"}
                              width={"60%"}
                         />
                    </Box>
                    <br />
                    <Box display={"flex"} gap={"5px"}>
                         <Input
                              borderBottom={"1px solid black"}
                              placeholder="Card Holder's name"
                              textDecoration={"none"}
                              borderRadius={"none"}
                              width={"60%"}
                         />
                         <Input
                              borderBottom={"1px solid black"}
                              placeholder="CVV"
                              textDecoration={"none"}
                              borderRadius={"none"}
                              width={"60%"}
                         />
                    </Box>
                    <Button onClick={handelpayment} mt='10'>Submit</Button>  
               </Box>
          </Box>,
          <Footer/>
  ]
  
}

export default FinalCheckout