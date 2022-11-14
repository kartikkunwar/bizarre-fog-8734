import { Box, Button, Image, Input, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authgetData, authsaveData } from "../Redux/utilies/authLocalData";

const CardPayment = () => {
     const [cartPayments, setCartPayments] = useState();
     const [cardNumber, setCardNumber] = useState("");
     const navigate = useNavigate();
     const handleCheckout = () => {
          let temp = cardHide(cardNumber);
          authsaveData("cardNumber", temp);
          navigate("/deliverydetails");
     };
     function cardHide(card) {
          let hideNum = [];
          for (let i = 0; i < card.length; i++) {
               if (i < card.length - 4) {
                    hideNum.push("x");
               } else {
                    hideNum.push(card[i]);
               }
          }
          return hideNum.join("");
     }

     useEffect(() => {
          let temp = authgetData("finalPrice");
          setCartPayments(temp);
     }, []);

     return (
          <Box>
               <Box
                    p={5}
                    height={"500px"}
                    margin={"auto"}
                    width={"350px"}
                    boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
               >
                    <Box
                         display={"flex"}
                         justifyContent={"space-between"}
                         p={5}
                         backgroundColor="#F28E2E"
                         height={"150px"}
                         alignItems={"center"}
                    >
                         <Box
                              display={"flex"}
                              alignItems={"center"}
                              width={"80px"}
                              backgroundColor={"#fff"}
                              height={"80px"}
                              p={2}
                         >
                              <Image
                                   src="https://d64lkarmo2mrq.cloudfront.net/baselogo.png"
                                   alt="img"
                              />
                         </Box>
                         <Box mr={"80px"} height={"70px"} p={2}>
                              <Text color={"white"} fontWeight={"bold"}>
                                   HappyCart
                              </Text>
                              <Text color={"white"} fontWeight={"bold"}>
                                   ₹ {cartPayments}
                              </Text>
                         </Box>
                    </Box>
                    <Text textAlign={"left"} p={5}>
                         Add New Card
                    </Text>
                    <Box display={"flex"} gap={"5px"}>
                         <Input
                              borderBottom={"1px solid black"}
                              placeholder="Card Number"
                              name="cardNumber"
                              value={cardNumber}
                              onChange={(e) => setCardNumber(e.target.value)}
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
                    <Button onClick={handleCheckout} mt={10}>
                         Checkout
                    </Button>
               </Box>
          </Box>
     );
};

export default CardPayment;