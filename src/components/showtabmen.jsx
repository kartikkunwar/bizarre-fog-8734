import { Box, Button, Divider, HStack, Image, StackDivider, Text, VStack } from "@chakra-ui/react"
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React from "react"
import { Link } from "react-router-dom"


export const ShowTab=({setShowdown})=>{
    
    
    const [clothing,setClothing]=React.useState(true)
    const [shoes,setShoes]=React.useState(false)
    const [bags,setBags]=React.useState(false)
    const [dt,setDt]=React.useState([])
    const [showtabdata,setShowtabdata]=React.useState([])

    const kartik=()=>{
        return axios.get("http://localhost:8080/product") 
    }

    React.useEffect(()=>{
        kartik()
        .then((res)=>setDt(res.data))
        .catch((err)=>console.log(err)) 
    },[])
    

    const handleclothing=()=>{
        setClothing(true);
        setShoes(false);
        setBags(false);
    }
    const handleall=()=>{
        setClothing(false);
        setShoes(false);
        setBags(false);
    }
    const closeshowtab=()=>{
        setShowdown(false)
    }
    const outdata=(e)=>{
        const val=e.target.value
        let con=dt.filter((el)=>{
            return el.gender=="Men"&&el.category==val
        }).map((el)=>el.imageList[0])
        setShowtabdata(con)
    }
    
    return(
        <Box  width="100%" border='1px solid black' position='fixed' top='80px' zIndex='2' bgColor='white' maxH='380px' overflow='auto'>
           <Box>
            <HStack spacing='24px'>
                <Button onClick={handleclothing}>Clothing</Button>
                <Link to='/product'><Button onClick={handleall}>All Men</Button></Link>
                </HStack>
           </Box>
           <Box border='1px solid black' display='flex' >
                <Box width={{base:'30%',md:'15%',lg:'15%'}} display='flex' p="20px">
                    {
                        clothing&&<VStack  spacing={4}>
                        <Button value="Shirts" onClick={outdata}>Shirt</Button>
                        <Button value="Shorts" onClick={outdata}>Shorts</Button>
                        <Button value="Coats" onClick={outdata}>Coats</Button>
                        <Button value="Suits" onClick={outdata}>Suits</Button>
                        <Button value="Beachwear" onClick={outdata}>Beachwear</Button>
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
                <Box position='absolute' left='5px' top='50px'>
                    <FontAwesomeIcon icon={faXmarkCircle} color='black' cursor='pointer' onClick={closeshowtab} fontSize={30}></FontAwesomeIcon>
                </Box>
                <Box className="checktab" pl={{base:"10px",md:'30px',lg:'100px'}}>
                   {
                    showtabdata.length&&showtabdata?.map((el,ind)=>{
                        return(
                            <Box key={ind}>
                                <Link to="/product"><Image src={el.input} alt={el.title} w='100%' h='100%'/></Link>
                            </Box>
                        )
                    })
                   }
                    {/* {
                    !showtabdata.length&&dt?.map((el,ind)=>{
                        return(
                            <Box key={ind}>
                                <Image src={el.imageList[0].input} w='100%' h='100%'/>
                            </Box>
                        )
                    })
                   } */}
                </Box>
           </Box>
        </Box>
    )
}