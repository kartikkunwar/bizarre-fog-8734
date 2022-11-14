// import { Button, Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const PaymentDetails = ({ handleSubmit }) => {
     return (
          <Wrapper>
               <Text as="b">Payment Details</Text>
               <Wrapper2>
                    <TextImageContainer className="paymentDetails">
                         <ImageContainer>
                              <Image
                                   src="https://www.moodlemonkey.com/wp-content/uploads/2020/01/how-it-works-icon2-1.png"
                                   alt="credid/Debit Card"
                              />
                         </ImageContainer>
                         <TextContainer>
                              <p>credid/Debit Card</p>
                         </TextContainer>
                    </TextImageContainer>
                    <TextImageContainer className="paymentDetails">
                         <ImageContainer>
                              <Image
                                   src="https://www.svgrepo.com/show/260684/payment-method-credit-card.svg"
                                   alt="Net Banking"
                              />
                         </ImageContainer>
                         <TextContainer>
                              <p>Net Banking</p>
                         </TextContainer>
                    </TextImageContainer>
                    <TextImageContainer className="paymentDetails">
                         <ImageContainer>
                              <Image
                                   src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3W5wALJsb-aUGMGHoziH9CJe4Q3GQBOLPqg&usqp=CAU"
                                   alt="Emi"
                              />
                         </ImageContainer>
                         <TextContainer>
                              {" "}
                              <p>EMI</p>
                         </TextContainer>
                    </TextImageContainer>
                    <TextImageContainer className="paymentDetails">
                         <ImageContainer>
                              <Image
                                   src="https://products.security.gallagher.com/security/medias/1200Wx1200H-Access-Product-Image-Placeholder?context=bWFzdGVyfGltYWdlc3wxODAzNnxpbWFnZS9qcGVnfGg5OC9oYzAvMTA3MTEzNTI4MzYxMjYvMTIwMFd4MTIwMEhfQWNjZXNzIFByb2R1Y3QgSW1hZ2UgUGxhY2Vob2xkZXJ8YTJiZTc4YjNiM2NjY2I5Zjg0NjgyZjI0ZTRmNWYwZjlmOTRjMTg3ZWM0YzdkOTMxN2JhZGE0NjczOGQ2OGNhYQ"
                                   alt="UPI"
                              />
                         </ImageContainer>
                         <TextContainer>
                              <p>UPI</p>
                         </TextContainer>
                    </TextImageContainer>
                    <TextImageContainer className="paymentDetails">
                         <ImageContainer>
                              <Image
                                   src="https://indian-retailer.s3.ap-south-1.amazonaws.com/s3fs-public/2020-03/simpl.jpg"
                                   alt="Simpl Pay"
                              />
                         </ImageContainer>
                         <TextContainer>
                              <p>Simpl Pay</p>
                         </TextContainer>
                    </TextImageContainer>
               </Wrapper2>
               <p style={{ margin: "20px", textAlign: "center" }}>
                    We accept all major credit and debit cards of Indian And
                    International banks.
               </p>
               
               <Link to ="/payment"><Button> Place Order</Button></Link>
          </Wrapper>
     );
};

const Wrapper = styled.div`
     margin-top: 130px;
     width: 45rem;
     padding: 5px;
`;
const Wrapper2 = styled.div`
     display: flex;
     flexdirection: "row";
     align-items: center;
     justify-content: space-around;
`;
const Image = styled.img`
     width: 90px;
     hight: 50px;
`;
const Button = styled.button`
     background-color: orange;
     color: white;
     border: none;
     margin: 0 5rem;
     height: 3.5rem;
     text-align: center;
     align-items: center;
     justify-content: center;
     width: 70vh;
`;
const TextImageContainer = styled.div`
     display: flex;
     border: 1px solid #ccc;
     margin: 0 2px;
     width: 150px;
     flex-direction: column;
     height: 12rem;
     align-item: center;
     justify-content: space-around;
`;
const ImageContainer = styled.div`
     margin: 0 auto;
     align-item: center;
`;

const TextContainer = styled.div`
     text-align: center;
     font-weight: bold;
`;

export default PaymentDetails;