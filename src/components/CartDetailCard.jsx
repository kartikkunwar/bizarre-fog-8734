import {
    Box,
    Grid,
    Text,
    GridItem,
    Input,
    Button,
    Image,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { authsaveData, authgetData } from "../Redux/utilies/authLocalData";
import CartCard from "./CartCard";

const CartDetailCard = () => {
    let data = authgetData("user_cart_items");
    console.log("data:", data);
    const [totalFinalPrice, setTotalFinalPrice] = useState(null);
    const [originalPrice, setOriginalPrice] = useState(null);
    const [coupenCode, setCoupenCode] = useState("");
    console.log(coupenCode);
    let total = data?.reduce((accum, item) => accum + item.price, 0) || 0;

    function applyDiscount() {
         if (coupenCode !== "" && coupenCode === "MASAI30") {
              total = data?.reduce((accum, item) => accum + item.price, 0);
              console.log("temp", total);
              let discount = total - (total * 30) / 100;
              console.log("discount", discount);
              setTotalFinalPrice(discount);
              authsaveData("finalPrice", discount);
         } else {
              total = data?.reduce((accum, item) => accum + item.price, 0);
              setTotalFinalPrice(total);
              authsaveData("finalPrice", total);
         }
         console.log("coupenCode", coupenCode);
    }
    useEffect(() => {
         setTotalFinalPrice(total);
         setOriginalPrice(total);
         authsaveData("finalPrice", total);
    }, []);

    return (
         <Box textAlign="left" padding="10px 50px">
              <Grid templateColumns="repeat(2, 1fr)" gap={2} w="full">
                   {/* <Text fontSize={"20px"} as={"b"}>
         Delivery Address
       </Text> */}

                   {data?.map((item, index) => (
                        <GridItem
                             key={index}
                             pl="10px"
                             mt={10}
                             colSpan="2"
                             border="1px solid #ccc"
                        >
                             <CartCard item={item} />
                        </GridItem>
                   ))}

                   <GridItem mt="3" colSpan={{ base: 2, md: 1 }}>
                        <Box borderBottom={"1px solid black"} w="16rem">
                             <Text textAlign={"left"}>Edit Cart</Text>
                        </Box>
                   </GridItem>
              </Grid>
              <Box
                   borderRadius={"15px"}
                   h={"55px"}
                   alignItems="center"
                   mt={"10"}
                   bg="#FFF7F2"
              >
                   <Text textAlign="center" color="Tomato">
                        <span style={{ fontSize: "20px", fontWeight: "bold" }}>
                             Congratulations!
                        </span>{" "}
                        You have saved Rs:5,500.00
                   </Text>
              </Box>
              <Box>
                   <Box display="flex" justifyContent="space-between">
                        <Text w="50">Sub Total </Text>:
                        <Text w="50" alignItems="flex-start">
                             ₹ {originalPrice}
                        </Text>
                   </Box>
                   <Box display="flex" justifyContent="space-between">
                        <Text>Shipping Fees </Text>:<Text>Shipping Free</Text>
                   </Box>
                   <Box display="flex" justifyContent="space-between">
                        <Text>Custom/Import Duties, Taxes</Text>:
                        <Text color="tomato">Not Applicable!</Text>
                   </Box>

                   <Box display="flex" justifyContent="space-between">
                        <Text>COD Fee</Text>:<Text>: ₹ 0 /- </Text>
                   </Box>
                   <br />
                   <Text>Got a Promotional Code? Use below:</Text>
                   <Box display="flex">
                        <Input
                             w="sm"
                             placeholder="Promotional Code"
                             defaultValue={"MASAI30"}
                             onChange={(e) => setCoupenCode(e.target.value)}
                        />
                        <Button bg="#F7941D" onClick={applyDiscount}>
                             Apply Code
                        </Button>
                   </Box>
              </Box>
              <Box mt={"20px"} borderTop={"1px solid black"}>
                   <Box
                        color={"#FF6B00"}
                        display="flex"
                        justifyContent="space-between"
                        fontWeight={"bold"}
                        fontSize="15px"
                   >
                        <Text>Grand Total</Text>:
                        <Text>
                             ₹ {totalFinalPrice}/- (Inclusive of All Taxes)
                        </Text>
                   </Box>

                   <Box display="flex">
                        <Text color={"brown"}>
                             {" "}
                             Or 3 interest free payments of{" "}
                             <span color="black">Rs-1166.34</span> with{" "}
                        </Text>
                        <Image
                             w="50px"
                             src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2020-03/simpl.jpg"
                             alt="Simpl Pay"
                        />
                   </Box>

                   <Box display="flex" justifyContent="space-around">
                        <Text fontSize={"13px"}>
                             Get up to Rs-500.00 OFF on your First Time Prepaid
                             Order (COD Excluded) with coupon{" "}
                        </Text>
                        <Text color="#F7941D">PREPAID</Text>
                   </Box>
                   <Box>
                        <Image src="imglg.jpg" />
                        <Text></Text>
                   </Box>
              </Box>
         </Box>
    );
};

export default CartDetailCard;