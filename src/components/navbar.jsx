import { ChevronDownIcon, HamburgerIcon,SearchIcon } from "@chakra-ui/icons"
import { Box, Button, Image, Text, Menu,MenuButton,MenuList,MenuItem,IconButton,Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {faUser,faCartArrowDown} from "@fortawesome/free-solid-svg-icons"

export const Navbar=()=>{
    return[
        <Box height="80px"  justifyContent="space-between" alignItems='center' bgColor='black' color='white' className="bigs">
            <Box height="100%" width='10%' >
              <Link><Image src="ONE STOP.png" height="100%" bgColor='none'/></Link>
            </Box>
            <Box display='flex' width='10%'  >
                <Link ><Text mr='5px'>Women</Text ></Link><span>|</span>
                <Link><Text ml='5px'>Men</Text></Link>
            </Box>
            <Box width='50%' color='white' ml="5%">
                <InputGroup>
                    <InputLeftElement pointerEvents='none' children={<SearchIcon color='white' />}/>
                    <Input type='tel' placeholder='search items' />
                </InputGroup>
            </Box>
            <Box width='5%' ml="3%">
                <span>1</span><FontAwesomeIcon icon={faCartArrowDown} color='white' fontSize={25}></FontAwesomeIcon>
            </Box>
            <Box width='15%'  textAlign='center'>
            <Menu>
                 <MenuButton className="lgb" as={Button} bgColor='teal' rightIcon={<ChevronDownIcon />}>Login / Signup</MenuButton>
                    <MenuList color='black'>
                        <Link><MenuItem className="mitem">Signup</MenuItem></Link>
                        <Link><MenuItem className="mitem">Login</MenuItem></Link>
                    </MenuList>
                </Menu>
            </Box>
        </Box>,
        <Box height="80px"   justifyContent="space-between" alignItems='center' bgColor='black'  className="smalls">
            <Box>
                <Menu>
                    <MenuButton as={IconButton} aria-label='Options' bgColor='gray.300' icon={<HamburgerIcon />} variant='outline'/>
                    <MenuList color='black'>
                        <MenuItem className="mitem">Men</MenuItem>
                        <MenuItem className="mitem">Women</MenuItem>
                        <InputGroup>
                            <InputLeftElement pointerEvents='none' children={<SearchIcon color='black' />}/>
                            <Input type='tel' placeholder='search items' />
                        </InputGroup>
                        <MenuItem className="mitem">Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Box height='100%'>
                <Link><Image src="ONE STOP.png" height="100%" bgColor='none'/></Link>
            </Box>
            <Box>
                <Menu>
                    <MenuButton><FontAwesomeIcon icon={faUser} color='white' fontSize={30}></FontAwesomeIcon></MenuButton>
                    <MenuList>
                        <MenuItem className="mitem"><span>1</span><FontAwesomeIcon icon={faCartArrowDown} color='black' fontSize={25}></FontAwesomeIcon></MenuItem>
                        <MenuItem className="mitem">Logout</MenuItem>
                        <MenuItem className="mitem">Settings</MenuItem>                                                
                    </MenuList>
                </Menu>
            </Box>
        </Box>
        ]
}