import { Box, Heading, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faInstagram } from "@fortawesome/fontawesome-free-brands"
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <Box mt="150px" bgColor='antiquewhite'>
            <Box width={{ base: "60%", md: '50%', lg: '80%' }} margin='auto' display={{ base: "block", md: "block", lg: 'flex' }} justifyContent='space-between' pt="30px">
                <Box mb={{ base: "50px", md: "50px" }}>
                    <a href="https://uk.trustpilot.com/review/www.lyst.com?utm_medium=trustbox&utm_source=Mini">
                        <Box>
                            <FontAwesomeIcon icon={faStar} color='lightgreen' fontSize={25}></FontAwesomeIcon><Heading display='inline' fontSize={26}>Trust Pilot</Heading><br></br>
                            <FontAwesomeIcon icon={faStar} color='lightgreen' fontSize={25}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} color='lightgreen' fontSize={25}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} color='lightgreen' fontSize={25}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStar} color='lightgreen' fontSize={25}></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faStarHalf} color='lightgreen' fontSize={25}></FontAwesomeIcon>
                        </Box>
                    </a>
                    <Box>
                        <Text>Trust score 4.5</Text>
                    </Box>
                    <Box>
                        <Link> <FontAwesomeIcon icon={faFacebook} color='darkblue' fontSize={25}></FontAwesomeIcon> </Link>
                        <Link> <FontAwesomeIcon icon={faInstagram} color='darkblue' fontSize={25}></FontAwesomeIcon> </Link>
                    </Box>
                    <a href="https://play.google.com/store/apps/details?id=com.lyst.lystapp">
                        <Box display='flex'>
                            <a href="https://play.google.com/store/apps/details?id=com.lyst.lystapp"><Image src="https://www.zee5.com/images/app_store.png?ver=2.52.40" /></a>
                            <a href="https://play.google.com/store/apps/details?id=com.lyst.lystapp"><Image src="https://www.zee5.com/images/play_store.png?ver=2.52.40" /></a>
                        </Box>
                    </a>
                    <a href="https://play.google.com/store/apps/details?id=com.lyst.lystapp">
                        <Box>
                            <Text>Learn about the Lyst app for iPhone, iPad and Android.</Text>
                        </Box>
                    </a>
                    <Box>
                        <Text>© 2022 Lyst</Text>
                    </Box>
                </Box>
                <Box display={{ base: 'block', md: 'flex', lg: 'flex' }} justifyContent='space-between' width={{ base: '100%', md: '100%', lg: '55%' }} >
                    <Box mb={{ base: "50px", md: "50px" }}>
                        <Heading fontSize={{ base: '22', md: '24', lg: '26' }}>INTERNATIONAL</Heading>
                        <UnorderedList listStyleType='none'>
                            <ListItem>Lyst - AU</ListItem>
                            <ListItem>Lyst - CA</ListItem>
                            <ListItem>Lyst - UK</ListItem>
                            <ListItem>Lyst - Deutschland</ListItem>
                            <ListItem>Lyst - España</ListItem>
                            <ListItem>Lyst - France</ListItem>
                            <ListItem>Lyst - Italia</ListItem>
                            <ListItem>Lyst - Netherland</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading fontSize={{ base: '22', md: '24', lg: '26' }}>HELP AND INFO</Heading>
                        <UnorderedList listStyleType='none'>
                            <a href="https://help.lyst.com/hc/en-gb"><ListItem>Help center</ListItem></a>
                            <ListItem>About us</ListItem>
                            <ListItem>Shipping policy</ListItem>
                            <ListItem>Return policy</ListItem>
                            <ListItem>Payments</ListItem>
                            <ListItem>Terms & Conditions</ListItem>
                            <ListItem>Developers</ListItem>
                            <ListItem>Contact</ListItem>
                        </UnorderedList>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}