import React from 'react';
import styled from "styled-components"
import FilterSort from '../ProductComponents/FilterSort';
import UserProducts from '../ProductComponents/UserProducts';



const AllProducts = () => {
  return (
      <div>
   
         <WrapperCustomer className='product-list'>
            <h1>CLOTHING FOR CUSTOMER</h1>
        </WrapperCustomer>
     
    <Wrapper color="green">
      <WrapperFilterSort>
        <FilterSort/>
      </WrapperFilterSort>

        <WrapperUserProduct>
          <UserProducts/>
        </WrapperUserProduct>

    </Wrapper>

    </div>
  )
}

const WrapperCustomer = styled.h1`
font-size:40px;
width:100%,
padding :30px;
text-align:center;
`

const Wrapper = styled.div`
  //  border:1px solid blue;
  // border:${({color})=>`3px solid ${color};`}
   display:flex;
   min-height:100vh;
   padding:50px;
`;
const WrapperFilterSort = styled.div`
  width:400px;
  // border:1px solid black;
  margin-left:50px;
  margin-top:100px;
  padding:20px;

  
`;
const WrapperUserProduct = styled.div`
width:100%;
padding:20px;
// border:1px solid blue ;  
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,max-content));
justify-content:center;
grid-gap:30px;

`


export default AllProducts;