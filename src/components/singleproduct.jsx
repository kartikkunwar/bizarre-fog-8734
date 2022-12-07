import { Alert, AlertIcon, Box, Button, Divider, Heading, Image, Text } from "@chakra-ui/react"
import axios from "axios"
import React, { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router-dom"
import {Navbar} from "./navbar"
import {Footer} from "./footer"
import { useSelector,useDispatch } from "react-redux"
import Slider from "react-slick"
import {addproductcart} from "../Redux/action"
import {getAllProduct} from "../Redux/action"
import ClockLoader from "react-spinners/ClockLoader";
import { PassContext } from "../kartikcontext/passcontext";
import { getlocaldata } from "../utils/localstoragedata"

export const SingleProduct=()=>{
    const [dt,setDt]=React.useState([])
    const [bulk,setBulk]=React.useState([])
    const [anim,setAmin]=React.useState(false)
    const {id}=useParams()
    const [dis,setDis]=React.useState("")
    const dispatch=useDispatch();
    const [showalert,setShowalert]=React.useState(false)
    const {log,changelog}=React.useContext(PassContext)
    const [lgalert,setLgalert]=React.useState(false)
    const [thisuser,setThisuser]=React.useState(null)

    // const navigate=useNavigate();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    const currentuser=getlocaldata("user")||[];
   
    const kartik=()=>{
        return axios.get(`http://localhost:8080/product/${id}`) 
    }
    
    useEffect(()=>{
            kartik()
            .then((res)=>setDt(res.data))
            .catch((err)=>console.log(err))

            if(currentuser.length){
                for(let i=currentuser.length-1;i>currentuser.length-2;i--){
                    setThisuser(currentuser[i].id)
                }
            }
    
    },[id]);

    useEffect(()=>{
        if(!dt.length){
            setBulk(dt.imageList)
            setDis(Math.floor(dt.price-(dt.price*dt.discount/100)))
        }
        
    })

    useEffect(()=>{
        dispatch(getAllProduct)
    })
    useEffect(()=>{
        setAmin(true)
        setTimeout(()=>{
           setAmin(false)
        },2000)
    },[])
    const cartdata=(data)=>{
        
        if(currentuser.length){
        dispatch(addproductcart(data))
        setShowalert(true)
        setTimeout(()=>{
           setShowalert(false)
        },5000)
    }else{
        setLgalert(true)
        setTimeout(()=>{
            setLgalert(false)
         },5000)
    }
    }
    
    return(
        <>
        {
           anim&&<Box width='100%' h='100vh' display='flex' alignItems='center' justifyContent='center'><ClockLoader
           color={'teal'}
           loading={anim}
           size={150}
           aria-label="Loading Spinner"
           data-testid="loader"
         /></Box>
   
        }
        {
           !anim&&[<Navbar/>,
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
                       <Slider {...settings}>
                       {
                           bulk?.map((el,ind)=>{
                               return(
                                   <Box><Image src={el.input} key={ind} h='80%' w='100%'/></Box>
                               )  
                           })
                       }
                      </Slider>
                  </Box>
               </Box>
               <Box w={{base:'80%',md:'50%',lg:'55%'}}  display='flex' flexDirection='column' gap='20px' m={{base:'auto',md:'0',lg:'0'}} pl='100px'>
                    <Box  mt='20px' lineHeight='50px'>
                       <Heading fontSize='25px' color='gray'>One Stop</Heading>
                       <Text fontSize='25px' color='gray'>{dt.title}</Text>
                    </Box><Divider orientation='horizontal'  margin='auto'/>
                    <Box   width='55%' display='flex' alignItems='center'>
                       <Heading>₹ {dis}</Heading>
                       <Heading fontSize={20} textDecoration='line-through' color='teal' ml='20px'>₹ {dt.price}</Heading>
                    </Box><Box><Text>{dt.discount}% discount</Text></Box>
                    <Divider orientation='horizontal'  margin='auto'/>
                    <Text>inclusive of all taxes</Text>
                    <Box  lineHeight='50px'>
                       <Text>Select Size</Text>
                       <Button mr='20px'>S</Button>
                       <Button mr='20px'>M</Button>
                       <Button mr='20px'>L</Button>
                       <Button>XL</Button>
                    </Box><Divider orientation='horizontal'  margin='auto'/>
                    <Box  display='flex' flexDirection='column' gap='30px' color='white'>
                       <Button className="btnhv" p='30px' w='60%' borderRadius='20px' colorScheme='teal' onClick={()=>cartdata(dt)}>ADD TO CART</Button>
                       <Button className="btnhv" p='30px' w='60%' borderRadius='20px' colorScheme='teal'>ADD TO WISHLIST</Button>
                    </Box>
                  
               </Box>
           
           </Box>,
           <Box>
           {
               showalert&&<Box w='30%' position='absolute'  top='-10' right='0'><Alert status='success'>
               <AlertIcon />
                    Product added to cart
           </Alert></Box>
           }
       </Box>,
       <Box>
          {
            lgalert&&<Box w='30%' position='absolute'  top='-10' right='0'>
                <Alert status='error'>
                    <AlertIcon />
                    Please Login first
                </Alert>
            </Box>
          }
       </Box>,
           <Footer/>]
        }
        </>
    )
}