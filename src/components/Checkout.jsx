import styled from "styled-components";
import React from "react";
import DeliveryAddressContainer from "../components/DeliveryAddressContainer";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

// import CartDetailCard from "../components/CartDetailCard";

const Checkout = () => {
     return [

     <Navbar/>,
          <Wrapper>
               <WrapperUserAndPaymentDetails>
                    <DeliveryAddressContainer />
               </WrapperUserAndPaymentDetails>

               {/* <WrapperCartShow>
                    <CartDetailCard />
               </WrapperCartShow> */}
          </Wrapper>,
          <Footer/>
     ]
};

const Wrapper = styled.div`
     //   border: 1px solid red;
     width: 85%;
     margin: 0 auto;
     margin-top:150px;
     display: flex;
     flex-direction: row;
     //   height: 100vh;
`;
const WrapperCartShow = styled.div`
     width: 50%;
`;

const WrapperUserAndPaymentDetails = styled.div`
     width: 50%;
`;

export default Checkout;