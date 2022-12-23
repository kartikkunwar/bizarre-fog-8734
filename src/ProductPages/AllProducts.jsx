import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import styled from "styled-components"
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
import FilterSort from '../ProductComponents/FilterSort';
import UserProducts from '../ProductComponents/UserProducts';



const AllProducts = () => {
  return (
    <div>
      <Navbar />
      {/* <WrapperCustomer id='customer'>
            <h1>CLOTHING FOR CUSTOMER</h1>
        </WrapperCustomer> */}
      <Box w='20%' margin='auto' display='flex' justifyContent='center' mt='100px' >
        <Heading color='gray'>ONE STOP</Heading>
      </Box>

      <Wrapper color="green">
        <WrapperFilterSort>
          <FilterSort />


        </WrapperFilterSort>

        <WrapperUserProduct>
          <UserProducts />
        </WrapperUserProduct>

      </Wrapper>
      <Footer />
    </div>
  )
}

// const WrapperCustomer = styled.h1`
// // font-size:40px;
// width:100%,
// padding :30px;
// text-align:center;
// margin-top:100px;
// border:3px solid black;
// background-color:teal;
// color:white;

// `

const Wrapper = styled.div`
  //  border:1px solid blue;
  // border:${({ color }) => `3px solid ${color};`}
  //  display:flex;
   min-height:100vh;
   padding:10px;
   margin-top:10px;
  
`;
const WrapperFilterSort = styled.div`
  width:250px;
  position:fixed;
  padding:50px;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  border-right:2px solid gray;
`;
const WrapperUserProduct = styled.div`
width:80%;
padding:20px;
margin-left:310px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,max-content));
justify-content:center;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
grid-gap:10px;
`




export default AllProducts;