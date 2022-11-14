import { Box, GridItem, Text } from "@chakra-ui/react";
import React from "react";

const CartCard = ({ item }) => {
     const { id, title, date, price } = item;
     return (
          <>
               <Text fontSize="15" as="b">
                    1 x {title}
               </Text>
               <Text mt="5px"> Dilivery Date: {date}</Text>
               <Text mt="5px">Price:₹ {price}</Text>
          </>
     );
};

export default CartCard;