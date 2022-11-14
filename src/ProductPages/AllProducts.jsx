import React from 'react';
import styled from "styled-components"
import { Footer } from '../components/footer';
import { Navbar } from '../components/navbar';
import FilterSort from '../ProductComponents/FilterSort';
import UserProducts from '../ProductComponents/UserProducts';



const AllProducts = () => {
  return (
      <div>
         <Navbar/>
         {/* <WrapperCustomer id='customer'>
            <h1>CLOTHING FOR CUSTOMER</h1>
        </WrapperCustomer> */}
     
    <Wrapper color="green">
      <WrapperFilterSort>
        <FilterSort/>
       

      </WrapperFilterSort>

        <WrapperUserProduct>
          <UserProducts/>
        </WrapperUserProduct>
        
    </Wrapper>
    <Footer/>
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
  // border:${({color})=>`3px solid ${color};`}
  //  display:flex;
   min-height:100vh;
   padding:50px;
   background-color: floralwhite;
   margin-top:80px;
  
`;
const WrapperFilterSort = styled.div`
 width:300px;
  position:fixed;
  padding:50px;
  border:2px solid teal;
   background:linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))

 
`;
const WrapperUserProduct = styled.div`
width:80%;
padding:20px;
margin-left:300px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;  
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,max-content));
justify-content:center;
grid-gap:30px;
background: repeating-linear-gradient(red, yellow 10%, green 20%)
`




export default AllProducts;