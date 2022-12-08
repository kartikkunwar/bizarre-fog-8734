import { Box, Button, FormControl, FormHelperText, FormLabel, Input, InputGroup, InputLeftAddon } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { Navbar } from "./navbar"

export const Checkout = () => {
    return (
        <>
            <Navbar />
            <Box w='40%' m='auto' mt="10%" >
                <FormControl display='flex' flexDirection='column' gap='10px'>
                    <FormLabel fontSize={18}>Email address</FormLabel>
                    <Input type='email' mt='-10px' />
                    <FormLabel fontSize={18}>Mobile No.</FormLabel>
                    <InputGroup mt='-10px'>
                        <InputLeftAddon children='+91' />
                        <Input type='tel' placeholder='phone number' />
                    </InputGroup>
                    <FormLabel fontSize={18}>Name</FormLabel>
                    <Input mt='-10px' />
                    <FormLabel fontSize={18}>Address Line 1</FormLabel>
                    <Input type='email' mt='-10px' />
                    <FormLabel fontSize={18}>Address Line 2</FormLabel>
                    <Input type='email' mt='-10px' />
                    <Link to='/payment'><Button w='100%' mt='20px'>Submit</Button></Link>
                </FormControl>
            </Box>
        </>
    )
}