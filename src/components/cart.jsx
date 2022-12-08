import { AlertIcon, Box, Button, Divider, Heading, Image, Input, Text } from "@chakra-ui/react"
import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Slider from "react-slick"
import { Navbar } from "./navbar"
import { Footer } from "./footer"
import { removeProductCart } from "../Redux/action"
import { adjustItemqty } from "../Redux/action"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faBagShopping} from "@fortawesome/free-solid-svg-icons"
import { Link } from "react-router-dom"
import ClockLoader from "react-spinners/ClockLoader";
import { Alert } from "react-bootstrap"
import { getlocaldata } from "../utils/localstoragedata"

export const Cart = () => {

    const data = useSelector((el) => el.cartItem)
    // const userinfo=getlocaldata("user")||[]
    const [price, setPrice] = React.useState(0)
    const [totalprice, setTotalPrice] = React.useState(0)
    const [disc, setDisc] = React.useState(0)
    const [code, setCode] = React.useState("")
    const [flag,setFlag]=React.useState(false)
    const dispatch = useDispatch()
    const [anim,setAmin]=React.useState(false)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    // if(userinfo.length){
    //     console.log(userinfo.cart)
    // }else{
    //     console.log("no")
    // }

    React.useEffect(() => {
        let p = 0;
        let totalp = 0
        data.forEach(el => {
            p += el.qty * Math.floor(el.price - (el.price * el.discount / 100))
        })

        data.length?setFlag(true):setFlag(false)
         
        totalp = p
        setDisc(0)
        if (code == "NEW200" && price > 999) {
            setDisc(200)
            totalp = p - 200
        }
        if (code == "GET20" && price > 499) {
            setDisc(100)
            totalp = p - 100
        }
        setPrice(p)
        setTotalPrice(totalp)
    })

    React.useEffect(()=>{
        setAmin(true)
        setTimeout(()=>{
           setAmin(false)
        },1000)
    },[])

    const adjustqtydec = (item, val) => {
        if(val==1){
            dispatch(removeProductCart(item))
        }else{
        dispatch(adjustItemqty(item, val - 1))
        }
    }
    const adjustqtyinc = (item, val) => {
        dispatch(adjustItemqty(item, val + 1))
    }
    const removeitem = (item) => {
        dispatch(removeProductCart(item))
    }

    const changehandler = (e) => {
        setCode(e.target.value)
    }

    // const nextpage=()=>{
    //     alert("Page is under progress. Sorry for the inconvinience")
    // }



    return (
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
            !anim&&[
                <Navbar />,
        flag&&<Box width='90%' m='auto' textAlign='center' mt='100px'>
            <Heading>My Cart Items</Heading>
            <Box w='100%' m='auto' display={{ base: 'block', md: 'block', lg: 'flex' }} justifyContent='space-between' mt='80px'>
                <Box width={{ base: '70%', md: '70%', lg: '45%' }} m={{ base: 'auto', md: 'auto', lg: '0' }}>
                    <Box p='15px' pr='20px' border='1px solid lightgray' borderRadius='10px' bgColor='lightyellow'>
                        <Text fontSize={20}>Yay! You get FREE delivery on this order</Text>
                    </Box>
                    {
                        data && data.map((el, ind) => {
                            return (
                                <Box mt='20px' border='1px solid lightgray' p='20px' borderRadius='10px'>
                                    <Box display='flex' justifyContent='space-between' key={ind}>
                                        <Box w='60%' display='flex' flexDirection='column' textAlign='left' pl='20px'>
                                            <Box pt="30px">
                                                <Text fontSize={20}>{el.short}</Text>
                                                <Text fontSize={24} mt='10px'>₹ {el.price - Math.ceil((el.price * el.discount / 100))}</Text>
                                            </Box>
                                            <Box mt="20px">
                                                <Button onClick={() => adjustqtydec(el, el.qty)}>-</Button>
                                                <Button>{el.qty}</Button>
                                                <Button onClick={() => adjustqtyinc(el, el.qty)}>+</Button>
                                            </Box>
                                        </Box>
                                        <Box w='35%'>
                                            <Slider {...settings}>
                                                <Box><Image src={el.imageList[0].input} w='100%' h='200px' key={ind} /></Box>
                                            </Slider>
                                        </Box>
                                    </Box><Divider orientation='horizontal' margin='auto' mt="20px" />
                                    <Box display='flex' justifyContent='left' gap="10%" mt="20px" color='white'>
                                        <Button width='45%' className="btnhv" colorScheme='teal' onClick={() => removeitem(el)} bgColor='teal'>Remove Item</Button>
                                        <Button width='45%' className="btnhv" colorScheme='teal' bgColor='teal'>Add To Wishlist</Button>
                                    </Box>
                                </Box>
                            )
                        })
                    }
                </Box>
                <Box width={{ base: '70%', md: '70%', lg: '50%' }} m={{ base: 'auto', md: 'auto', lg: '0' }} display='flex' flexDirection='column' textAlign='left' gap='20px'>
                    <Box p='20px' pr='20px' border='1px solid lightgray' borderRadius='10px' bgColor='lightyellow'>
                        <Text fontSize={16}>Save extra ₹140 with OS NEW</Text>
                    </Box>
                    <Box p='20px' pr='20px' border='1px solid lightgray' borderRadius='10px'>
                        <Text fontSize={18}>Get Rs.200 instant discount on your First Purchase above Rs.999. Coupon code -NEW200</Text>
                    </Box>
                    <Box p='20px' pr='20px' border='1px solid lightgray' borderRadius='10px'>
                        <Text fontSize={18}>Whistles! Get extra Rs.100 Cashback on prepaid orders above Rs.499. Coupon code - GET20. Applicable for new customers only!</Text>
                    </Box>
                    <Box >
                        <Input placeholder="Have a Coupon / Referral / Gift Card ?" value={code} onChange={changehandler} />
                    </Box>
                    <Box textAlign='center' bgColor='lightgray' p='20px'>
                        <Heading fontSize={20}>Price Summary</Heading>
                    </Box>
                    <Box>
                        <Box display='flex' justifyContent='space-between'>
                            <Box p='20px'>
                                <Text fontSize={20}>Total MRP (Incl. of taxes)</Text>
                                <Text fontSize={20}>Shipping Charges</Text>
                                <Text fontSize={20}>Coupon Discount</Text>
                                <Text fontSize={20}>SubTotal</Text>
                            </Box>
                            <Box p='20px'>
                                <Text fontSize={20}>₹ {price}</Text>
                                <Text fontSize={20}>Free</Text>
                                <Text fontSize={20}>₹ {disc}</Text>
                                <Text fontSize={20}>₹ {totalprice}</Text>
                            </Box>
                        </Box>
                        <Box textAlign='center'>
                            <Text fontSize={24}>YOU ARE SAVING ₹ {disc} ON THIS ORDER</Text>
                        </Box>
                    </Box>
                    <Box display={{ base: 'block', md: 'block', lg: 'flex' }} justifyContent='space-around'>
                        <Box w={{ base: '100%', md: '100%', lg: '30%' }} display='flex' alignItems='center' bgColor='lightyellow'><Text fontSize={30}>Total  ₹ {totalprice}</Text></Box>
                        <Box w={{ base: '100%', md: '100%', lg: '80%' }} color='white'><Link to='/checkout'><Button w='80%' bgColor='teal' p='30px' className="btnhv" colorScheme='teal' fontSize={22} >Checkout</Button></Link></Box>
                    </Box>
                </Box>
            </Box>
        </Box>,
        !flag&&<Box  width='70%' m="auto" mt="100px">
             <Box mt='150px' display={{base:'block',md:'block',lg:'flex'}} justifyContent='space-around' >
                <Box w={{base:'100%',md:'90%',lg:'50%'}} m='auto'>
                   <Image src="https://cdn.dribbble.com/users/887568/screenshots/3172047/ufo.gif" h="100%" w='100%'/>
                </Box>
                <Box w={{base:'100%',md:'90%',lg:'48%'}} textAlign='center' pt='15%' m='auto'>
                    <Heading>Cart is Empty !</Heading>
                    <Divider orientation='horizontal' margin='auto' mt="20px" />
                    <Link to='/'><Button w={{base:'100%',md:'90%',lg:'80%'}} p='30px' fontSize='22px' className="btnhv" colorScheme='teal' mt='50px'><FontAwesomeIcon icon={faBagShopping} color='white' fontSize={25}></FontAwesomeIcon> Continue Shopping</Button></Link>
                </Box>
             </Box>
        </Box>,
        <Footer />
            ]
        }
        </>
    )
}