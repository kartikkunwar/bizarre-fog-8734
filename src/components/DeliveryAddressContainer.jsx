import {
    FormControl,
    FormLabel,
    Text,
    Input,
    VStack,
    Grid,
    GridItem,
    Select,
    Link,
    Checkbox,
} from "@chakra-ui/react";
import React, { useState } from "react";
import PaymentDetails from "./PaymentDetails";
import { stateList } from "./state";
import { authsaveData } from "../Redux/utilies/authLocalData";
import { useNavigate } from "react-router-dom";
const initState = {
    fullname: "",
    phone: "",
    email: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
};

const DeliveryAddressContainer = () => {
    const [formData, setFormData] = useState(initState);
    const navigate = useNavigate();
    const handleChange = (event) => {
         const { name, value } = event.target;
         const val = name === "age" ? Number(value) : value;
         setFormData({ ...formData, [name]: val });
    };
    const {
         fullname,
         phone,
         email,
         address1,
         address2,
         country,
         state,
         city,
         pincode,
    } = formData;
    const handleSubmit = () => {
         authsaveData("address", formData);
         setFormData({
              fullname: "",
              phone: "",
              email: "",
              address1: "",
              address2: "",
              country: "",
              state: "",
              city: "",
              pincode: "",
         });
         navigate("/cardpayment");
    };

    return (
         <div
              style={{
                   textAlign: "left",
                   padding: "10px 50px",
              }}
         >
              <VStack
                   w="full"
                   h="full"
                   // p={10}
                   pl={10}
                   pr={10}
                   spacing={10}
                   alignItems="flex-start"
              >
                   <Text as="b">Your Email & Phone Number</Text>
                   <Text fontSize={"xs"}>
                        For full account access please{" "}
                        <Link color={"#2A7CC2"} href="#">
                             Login
                        </Link>{" "}
                        or{" "}
                        <Link color={"#2A7CC2"} href="#">
                             Sign Up
                        </Link>
                   </Text>
                   <FormControl isRequired>
                        <FormLabel fontSize={"sm"} mt="5">
                             Email address
                        </FormLabel>
                        <Input
                             type="email"
                             name="email"
                             value={email}
                             isRequired={true}
                             placeholder="Email Address"
                             onChange={handleChange}
                        />
                        <FormLabel fontSize={"sm"} mt="5">
                             Phone Number
                        </FormLabel>
                        <Input
                             type="number"
                             name="phone"
                             required
                             value={phone}
                             placeholder="Phone Number"
                             onChange={handleChange}
                        />
                   </FormControl>
                   <Checkbox
                        mt="5"
                        size="sm"
                        colorScheme="orange"
                        defaultChecked
                   >
                        I agree to be contacted through Whatsapp for Order
                        Updates
                   </Checkbox>
                   <Grid templateColumns="repeat(2, 1fr)" gap={2} w="full">
                        <Text as={"b"}>Delivery Address</Text>

                        <GridItem colSpan="2">
                             <FormControl>
                                  <FormLabel>Name</FormLabel>
                                  <Input
                                       name="fullname"
                                       required
                                       value={fullname}
                                       placeholder="Name"
                                       size="md"
                                       onChange={handleChange}
                                  />
                             </FormControl>
                        </GridItem>
                        <GridItem mt="3" colSpan={{ base: 2, md: 1 }}>
                             <FormControl>
                                  <FormLabel>Address 1</FormLabel>
                                  <Input
                                       type="text"
                                       required
                                       name="address1"
                                       value={address1}
                                       placeholder="Address 1"
                                       onChange={handleChange}
                                  />
                             </FormControl>
                        </GridItem>

                        <GridItem mt="3" colSpan={{ base: 2, md: 1 }}>
                             <FormControl>
                                  <FormLabel>Address 2</FormLabel>
                                  <Input
                                       name="address2"
                                       value={address2}
                                       type="text"
                                       placeholder="Address 2"
                                       onChange={handleChange}
                                  />
                             </FormControl>
                        </GridItem>
                        <GridItem mt="3" colSpan="auto">
                             <FormControl>
                                  <FormLabel>State</FormLabel>
                                  <Select
                                       name="state"
                                       required
                                       placeholder="Select State"
                                       value={state}
                                       onChange={handleChange}
                                  >
                                       {stateList.map((item, index) => (
                                            <option
                                                 key={index}
                                                 value={item.value}
                                            >
                                                 {item.label}
                                            </option>
                                       ))}
                                  </Select>
                             </FormControl>
                        </GridItem>

                        <GridItem mt="3" colSpan={{ base: 2, md: 1 }}>
                             <FormControl>
                                  <FormLabel>City</FormLabel>
                                  <Input
                                       value={city}
                                       required
                                       name="city"
                                       type="text"
                                       placeholder="City"
                                       onChange={handleChange}
                                  />
                             </FormControl>
                        </GridItem>

                        <GridItem mt="3" colSpan={{ base: 2, md: 1 }}>
                             <FormControl>
                                  <FormLabel>Country</FormLabel>
                                  <Select
                                       name="country"
                                       value={country}
                                       placeholder="Select country"
                                       required
                                       onChange={handleChange}
                                  >
                                       <option value="india">India</option>
                                       <option value="nepal">Nepal</option>
                                       <option value="pakistan">
                                            Pakistan
                                       </option>
                                       <option value="us">US</option>
                                       <option value="bangladesh">
                                            Bangladesh
                                       </option>
                                       <option value="china">China</option>
                                       <option value="srilanka">
                                            Shri Lanka
                                       </option>
                                       <option value="russia">Russia</option>
                                       <option value="nigeria">Nigeria</option>
                                       <option value="uae">
                                            United Arab Emirates
                                       </option>
                                  </Select>
                             </FormControl>
                        </GridItem>
                        <GridItem mt="3" colSpan={{ base: 2, md: 1 }}>
                             <FormControl>
                                  <FormLabel>Pin Code</FormLabel>
                                  <Input
                                       name="pincode"
                                       required
                                       value={pincode}
                                       type="text"
                                       placeholder="City"
                                       onChange={handleChange}
                                  />
                             </FormControl>
                        </GridItem>
                        <GridItem mt="3" colSpan={{ base: 2, md: 2 }}>
                             <Text as="b">Payment Details</Text>
                             <br />

                             <Checkbox
                                  size="sm"
                                  colorScheme="orange"
                                  defaultChecked
                             >
                                  same as Shipping Address
                             </Checkbox>
                        </GridItem>
                   </Grid>
              </VStack>
              <PaymentDetails />
         </div>
    );
};

export default DeliveryAddressContainer;