import React, { useState } from 'react'
import { Box, Button, Grid, GridItem, Input,Image,Text, Flex,FormControl } from '@chakra-ui/react'
import { Link} from 'react-router-dom';
import { signin_attemp } from '../Redux/action';
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'

import {FcGoogle} from 'react-icons/fc'
import {BsFacebook} from 'react-icons/bs'
import {BsApple} from 'react-icons/bs'
import './SignIn.css'
import {useDispatch} from 'react-redux'
import { UserSignIn } from '../Redux/action';


const SignIn = () => {
  // const auth = useSelector(state => state.Auth.auth)

 
  const dispatch = useDispatch()
  const initialState = { 
    email: '',
   password: ""
   }

  const [loginData, setLoginData] = useState(initialState)
  const [icon , setIcon]=useState(eyeOff)
  const [pass, setPass]= useState(false);


  const handleToggle=()=>{
    if(pass===false){
      setIcon(eye);
      setPass(true)
    }else{
      setIcon(eyeOff);
      setPass(false)
    }
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    // dispatch(signin_attemp(loginData))
    dispatch(UserSignIn(loginData))
  }
 console.log(loginData)
  // if (auth) {
  //   return <Navigate to='/' />
  // }



  return (
    <Box>
    <Grid templateColumns='repeat(2,1fr)' h='1000' w='full' m='auto'  textAlign='center' >

       <GridItem w='90%' >
        <Box pb='60px'  w='90%' m='auto' h='800px' mt='200px'  >
        <Text fontSize='xl' pb='20px' textAlign='center'  w='100%'><strong>The only fashion site you need</strong></Text>
    
        
  
       <FormControl  onSubmit={handleSubmit} >

            <Input w="85%"   p="25px"  mt="25px" borderRadius="10px" type="email" name="email" placeholder='Email address' onChange={e => { setLoginData({ ...loginData, [e.target.name]: e.target.value }) }}
            />
        <br/>
         
         <br />
         <Input w="85%"    p="25px"  mt="25px"   type={pass? "text":"password"} name="password" placeholder="Password" onChange={e => { setLoginData({ ...loginData, [e.target.name]: e.target.value }) }}
             />
            {/* <span  onClick={handleToggle}><Icon icon ={icon} size={25}/></span> */}
            
            <Box><input  type="checkbox" />Keep me signed in</Box>
         <br />
         <p >
            By creating an account, I agree to the Orbitz
            <span>Terms and Conditions</span>,<span>Privacy Statement</span> and
            <span> Orbitz Rewards Terms and Conditions</span>.
          </p>
         
         <Button size="md"  p="25px"  width="85%"   borderRadius="10px" borderColor="black.500"    backgroundColor="black"  color="white" mt="25px"  
            type={'submit'}>SignIn</Button>

        
         </FormControl>

       <div style={{ marginBottom: "100px" }} className="create">
         <p>Already have an account?</p>
         <Link style={{ textDecoration: "underline", marginLeft: "5px" }} to="/Signin"><strong>Singup</strong></Link>
         <br/>
         <hr/>
         <Box   h='300px' w='full'  mt='50px' >
        <Box border='1px solid black' h='55px' w='full' mt='2%' >
            <Flex>
                <Box  h='55px' w='75px'>              
                <FcGoogle  className='google'/>
                </Box>
                <Box  h='55px' w='full'>
                <Button  fontSize='xl' pb='20px' textAlign='center'  w='100%'><strong>Continue with Google</strong></Button>
                </Box>
            </Flex>
        </Box>
        <Box  border='1px solid black' mt='2%' >
        <Flex>
                <Box  h='55px' w='80px'>
                <BsApple className='apple'/>
                </Box>
                <Box  h='55px' w='full'>
                <Text fontSize='xl' pb='20px' textAlign='center'  w='100%'><strong>Continue with Apple</strong></Text>
                </Box>
            </Flex>
        </Box>
        
        <Box  border='1px solid black' mt='2%' >
        <Flex >
                <Box  h='55px' w='80px'>
                <BsFacebook className='facebook'/>
                </Box>
                <Box  h='55px' w='full'>
                <Text fontSize='xl' pb='20px' textAlign='center'  w='100%'><strong>Continue with Facebook</strong></Text>
                </Box>
            </Flex>
        </Box>
       </Box> 
    </div>       
</Box>
</GridItem> 

<GridItem>
<Box pb='60px'  w='750px' m='auto' h='800px' mt='80px'  >
<Grid templateColumns='repeat(3,1fr)'  h='800px'>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOKjjw7MhBrj2XSQGY2VYVn8soXN8bT4ZYgQ&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWBuq07kDVBSbLdDlcELO4ZsxMqhnadBrHg&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1zSWT-qbly5VZ1A0BoLrsSz3EJPehP94yAg&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpz6g86IR8JxMefxJlHMTr_C7P_w_C9WQHGHTi41qStRcmNV-6WK-SsgxcWu8vpse08DM&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK0He7WCPvpag7z8LgvqMvV2Qr3iPkW3f6vUfuL-4mSg8qUDwq24F8HnhTLnC4UeYq2GA&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZP64pNNpZxcl4sFJpQzTFCPb_6Cufx6QaoQ&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWBuq07kDVBSbLdDlcELO4ZsxMqhnadBrHg&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKl9pFyQeAEWXXe6Dn06xJWsn83_Z2UFO67A&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRao8CVPCmUn7hR9Xz_IKvCuT4DJ7IddAO59w&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNIpXj7OPolk69NoNREhMM2Um99PBMhMMw&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWBuq07kDVBSbLdDlcELO4ZsxMqhnadBrHg&usqp=CAU' alt='img'/>
</Box>
<Box  h='65px'>
<Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfBmxvut_GE23VWhmuRvUUQSG3jeQj7aVyZQ&usqp=CAU' alt='img'/>
</Box>

</Grid>
</Box>
</GridItem>

</Grid>
<br/>
<hr/>
</Box>

  )
}

export default SignIn