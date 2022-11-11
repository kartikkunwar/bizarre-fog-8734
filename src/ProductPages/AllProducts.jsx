import React from 'react';
import styled from "styled-components"
import FilterSort from '../ProductComponents/FilterSort';
import UserProducts from '../ProductComponents/UserProducts';



const AllProducts = () => {
    return (
        <Wrapper color="green">
            <WrapperFilterSort>
                <FilterSort />
            </WrapperFilterSort>

            <WrapperUserProduct>
                <UserProducts />
            </WrapperUserProduct>

        </Wrapper>
    )
}

const Wrapper = styled.div`
  //  border:1px solid blue;
  border:${({ color }) => `3px solid ${color};`}
   display:flex;
   min-height:100vh
`;
const WrapperFilterSort = styled.div`
  width:200px;
  border:1px solid black;
`;
const WrapperUserProduct = styled.div`
width:100%;
border:1px solid blue ;  
display:grid;
grid-template-columns:repeat(auto-fit,minmax(200px,max-content));
justify-content:center;
grid-gap:10px;
`


export default AllProducts;