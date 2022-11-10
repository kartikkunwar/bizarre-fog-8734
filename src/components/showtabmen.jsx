import { Box, Button, Divider, HStack, StackDivider, Text, VStack } from "@chakra-ui/react"
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"
import { Link } from "react-router-dom"


export const ShowTab=({setShowdown})=>{
    
    
    const [clothing,setClothing]=React.useState(true)
    const [shoes,setShoes]=React.useState(false)
    const [bags,setBags]=React.useState(false)
   

    const handleclothing=()=>{
        setClothing(true);
        setShoes(false);
        setBags(false);
    }
    const handleshoes=()=>{
        setClothing(false);
        setShoes(true);
        setBags(false); 
    }
    const handlebags=()=>{
        setClothing(false);
        setShoes(false);
        setBags(true);   
    }
    const handleall=()=>{
        setClothing(false);
        setShoes(false);
        setBags(false);
    }
    const closeshowtab=()=>{
        setShowdown(false)
    }
    return(
        <Box  width="100%" border='1px solid black' position='fixed' top='80px' zIndex='2' bgColor='white'>
           <Box>
            <HStack spacing='24px'>
                <Button onClick={handleclothing}>Clothing</Button>
                <Button onClick={handleshoes}>Shoes</Button>
                <Button onClick={handlebags}>Bags</Button>
                <Link><Button onClick={handleall}>All Men</Button></Link>
                </HStack>
           </Box>
           <Box border='1px solid black' display='flex' >
                <Box width='10%' display='flex' p="20px">
                    {
                        clothing&&<VStack  spacing={4}>
                        <Link><Text>All Clothing</Text></Link>
                        <Link><Text>Shirt</Text></Link>
                        <Link><Text>Beachwear</Text></Link>
                        <Link><Text>Coats</Text></Link>
                        <Link><Text>Jackets</Text></Link>
                        <Link><Text>Shorts</Text></Link>
                    </VStack>
                    }
                    {
                        shoes&&<VStack  spacing={4} >
                        <Link><Text>All shoes</Text></Link>
                        <Link><Text>Sneakers</Text></Link>
                        <Link><Text>joggers</Text></Link>
                        <Link><Text>Boots</Text></Link>
                        <Link><Text>Leather</Text></Link>
                    </VStack>
                    }
                    {
                        bags&&<VStack  spacing={4} >
                        <Link><Text>All Bags</Text></Link>
                        <Link><Text>Handbag</Text></Link>
                        <Link><Text>Bag Pack</Text></Link>
                        <Link><Text>Packer</Text></Link>
                    </VStack>
                    }
                </Box>
                <Box h='100%' p={4} >
                    <Divider orientation='vertical'  h="250px" margin='auto'/>
                </Box>
                <Box position='absolute' right='20px' top='60px'>
                    <FontAwesomeIcon icon={faXmarkCircle} color='black' cursor='pointer' onClick={closeshowtab} fontSize={30}></FontAwesomeIcon>
                </Box>
                <Box>

                </Box>
           </Box>
        </Box>
    )
}