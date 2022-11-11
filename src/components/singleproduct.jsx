import { Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import {Navbar} from "./navbar"
import {Footer} from "./footer"
import { useSelector } from "react-redux"


export const SingleProduct=()=>{
    const [dt,setDt]=React.useState([])
    const [bulk,setBulk]=React.useState([])
    const {id}=useParams()
    const [dis,setDis]=React.useState("")

    // const dat=useSelector((el)=>console.log(el.product))

    const kartik=()=>{
        return axios.get(`http://localhost:8080/product/${id}`) 
    }
    useEffect(()=>{
            kartik()
            .then((res)=>setDt(res.data))
            .catch((err)=>console.log(err))
    
    },[id]);

    useEffect(()=>{
        if(!dt.length){
            setBulk(dt.imageList)
            setDis(Math.floor(dt.price-(dt.price*10/100)))
        }
    })
   
    
    return[
        <Navbar/>,
        <Box display={{base:'block',md:'flex',lg:'flex'}} w={{base:'100%',md:'90%',lg:'80%'}} margin='auto' mt='150px'  justifyContent='space-between'>
            <Box w={{base:'80%',md:'50%',lg:'40%'}} display='flex' gap='5%' m={{base:'auto'}}>
               <Box width='25%'  >
                  {
                    bulk?.map((el,ind)=>{
                        return(
                            <Box key={ind} height='120px'><Image src={el.input} h='100%' w='100%'/></Box>
                        )
                    })
                  }
               </Box>
               <Box width="70%" >
                  {/* {
                    bulk?.map((el)=>{
                        return <Image src={el.input} h='95%' p='20px'/>
                    })
                  } */}
               </Box>
            </Box>
            <Box w={{base:'80%',md:'50%',lg:'55%'}}  display='flex' flexDirection='column' gap='20px' m={{base:'auto',md:'0',lg:'0'}}>
                 <Box  mt='20px' lineHeight='50px'>
                    <Heading fontSize='25px'>One Stop</Heading>
                    <Text fontSize='25px'>{dt.title}</Text>
                 </Box><Divider orientation='horizontal'  margin='auto'/>
                 <Box  lineHeight='50px'>
                    <Heading>${dis}</Heading>
                    <Heading>${dt.price}</Heading>
                    <Text>inclusive of all taxes</Text>
                 </Box><Divider orientation='horizontal'  margin='auto'/>
                 <Box  lineHeight='50px'>
                    <Text>Select Size</Text>
                    <Button mr='20px'>S</Button>
                    <Button mr='20px'>M</Button>
                    <Button mr='20px'>L</Button>
                    <Button>XL</Button>
                 </Box><Divider orientation='horizontal'  margin='auto'/>
                 <Box  display='flex' flexDirection='column' gap='30px'>
                    <Button p='30px' w='60%' borderRadius='20px' bgColor='teal'>ADD TO CART</Button>
                    <Button p='30px' w='60%' borderRadius='20px' bgColor='teal'>ADD TO WISHLIST</Button>
                 </Box>
               
            </Box>
        </Box>,
        <Footer/>
    ]
}