import { Box, Button, FormControl, FormHelperText, FormLabel, Input } from "@chakra-ui/react"
import { Link} from "react-router-dom"
import { Navbar } from "./navbar"

export const Payment = () => {
 
    const success=()=>{
        alert("order placed")
    }
    return (
        <>
            <Navbar />
            <Box w='20%' m='auto' mt="10%" >
                <FormControl display='flex' flexDirection='column' gap='10px'>
                    <FormLabel fontSize={18}>Card Number</FormLabel>
                    <Input type='number' mt='-10px' />
                    <FormLabel fontSize={18}>Name</FormLabel>
                    <Input mt='-10px' />
                    <FormLabel fontSize={18}>Exp Date</FormLabel>
                    <Input
                        placeholder="Select Date"
                        size="md"
                        type="date"
                        mt='-10px'
                    />
                    <FormLabel fontSize={18}>CVV</FormLabel>
                    <Input type='number' mt='-10px' />
                    <Link to='/'><Button w='100%' mt='20px' onClick={success}>Submit</Button></Link>
                </FormControl>
            </Box>
        </>
    )
}