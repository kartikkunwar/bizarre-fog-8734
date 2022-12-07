import { ChevronDownIcon, HamburgerIcon,SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Image, Text, Menu,MenuButton,MenuList,MenuItem,IconButton,Input, InputGroup, InputLeftElement, Divider, Alert, AlertIcon } from "@chakra-ui/react"
import { Link,useNavigate } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUser,faCartArrowDown} from "@fortawesome/free-solid-svg-icons"
import React from "react"
import { ShowTab } from "./showtabmen"
import { ShowTabwomen } from "./showtabwomen"
import { SearchResults } from "./searchresults"
import { useSelector } from "react-redux"
import { PassContext } from "../kartikcontext/passcontext";
import ONESTOP from "../Admin/Photo/ONE STOP.png"
import { getlocaldata, setlocaldata } from "../utils/localstoragedata"

export const Navbar=()=>{
      const [showdown,setShowdown]=React.useState(false)
      const [showdownwomen,setShowdownwomen]=React.useState(false)
      const [query,setQuery]=React.useState("")
      const {log,changelog}=React.useContext(PassContext)
      const [lgalert,setLgalert]=React.useState(false)
      const navigate=useNavigate();
      const [curruser,setCurruser]=React.useState([]);

      const qtydata=useSelector((el)=>el.cartQty)

      
      
      React.useEffect(()=>{
        const x=getlocaldata("user")||[]
        if(x.length){
            setCurruser(x)
        }
        
      },[curruser])
      const setmen=()=>{
         setShowdown(true)
         setShowdownwomen(false)
      }
      const setwomen=()=>{
        setShowdown(false)
        setShowdownwomen(true)
     }
     const setquerychange=(e)=>{
        setQuery(e.target.value)
     }
     const lgio=()=>{
        // if(log){
        //     changelog();
        //     setLgalert(true)
        // setTimeout(()=>{
        //     setLgalert(false)
        //  },5000)
        // }else{
        //  navigate("/signin")
        // }
        if(curruser.length){
            setlocaldata("user",[])
            setCurruser([])
            changelog();
            setLgalert(true)
            setTimeout(()=>{
                setLgalert(false)
            },5000)
        }else{
            navigate("/signin")
        }
     }
     
    return[
        <Box height="80px"  justifyContent="space-between" alignItems='center' bgColor='black' color='white' className="bigs" zIndex='3'>
            <Box height="100%" width='10%' >
              <Link to='/'><Image src={ONESTOP} height="100%" bgColor='none'/></Link>
            </Box>
            <Box display='flex' width='10%' >
                <Button mr='5px' bg='none' onClick={setwomen}>Women</Button ><Divider orientation='vertical' height='20px' margin='auto'/>
                <Button ml='5px' bg='none' onClick={setmen}>Men</Button>
            </Box>
            <Box width='50%' color='white' ml="5%">
                <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<SearchIcon color='white' />}/>
                    <Input type='tel' placeholder='search items' value={query} onChange={setquerychange}/>
                </InputGroup>
            </Box>
            <Box width='5%'  ml="3%" display='flex' alignItems='center'>
                <Box bgColor='yellow' p='8px' color='black' borderRadius='50%'><span bgColor='blue'>{qtydata}</span></Box><Link to='/cart'><FontAwesomeIcon icon={faCartArrowDown} color='white' fontSize={25}></FontAwesomeIcon></Link>
            </Box>
            <Box width='15%'  textAlign='center'>
            <Menu >
                 <MenuButton className="lgb" as={Button} bgColor='teal' rightIcon={<ChevronDownIcon />} >{curruser.length?curruser.map((el)=><Text>{el.name}</Text>):<FontAwesomeIcon icon={faUser} color='white' fontSize={30}></FontAwesomeIcon>}</MenuButton>
                    <MenuList color='black'>
                        <Link to='/signup'><MenuItem className="mitem">{!curruser.length? 'Signup': 'Settings'}</MenuItem></Link>
                        <MenuItem className="mitem" onClick={lgio}>{!curruser.length? 'Login': 'Logout'}</MenuItem>
                        <Link to='/admin'><MenuItem className="mitem">Admin Login</MenuItem></Link>
                    </MenuList>
                </Menu>
            </Box>
        </Box>,
        <Box height="80px"   justifyContent="space-between" alignItems='center' bgColor='black'  className="smalls" zIndex='3'>
            <Box>
                <Menu>
                    <MenuButton as={IconButton} aria-label='Options' bgColor='gray.300' icon={<HamburgerIcon />} variant='outline'/>
                    <MenuList color='black'>
                        <MenuItem className="mitem" onClick={setmen}>Men</MenuItem>
                        <MenuItem className="mitem" onClick={setwomen}>Women</MenuItem>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' children={<SearchIcon color='black' />}/>
                            <Input type='tel' placeholder='search items' value={query} onChange={setquerychange}/>
                        </InputGroup>
                    </MenuList>
                </Menu>
            </Box>
            <Box height='100%'>
                <Link><Image src={ONESTOP} height="100%" bgColor='none'/></Link>
            </Box>
            <Box>
                <Menu>
                    <MenuButton><FontAwesomeIcon icon={faUser} color='white' fontSize={30}></FontAwesomeIcon></MenuButton>
                    <MenuList>
                        <Link to='/cart'><MenuItem className="mitem" bgColor='lightyellow'><span>{qtydata}</span><FontAwesomeIcon icon={faCartArrowDown} color='black' fontSize={25}></FontAwesomeIcon></MenuItem></Link>
                        <MenuItem className="mitem" onClick={lgio}>{!curruser.length? 'Login': 'Logout'}</MenuItem>
                        <MenuItem className="mitem">{!curruser.length? 'Signup': 'Settings'}</MenuItem>
                        <Link to='/admin'><MenuItem className="mitem">Admin Login</MenuItem></Link>                                                
                    </MenuList>
                </Menu>
            </Box>
        </Box>,
        <Box>
        {
          lgalert&&<Box w='30%' position='absolute'  top='10' right='0' zIndex='9999'>
              <Alert status='error'>
                  <AlertIcon />
                  User Logged Out
              </Alert>
          </Box>
        }
        </Box>,
        showdown&&<ShowTab setShowdown={setShowdown}/>,
        showdownwomen&&<ShowTabwomen setShowdownwomen={setShowdownwomen}/>,
        <SearchResults query={query} setQuery={setQuery}/>
        ]
}