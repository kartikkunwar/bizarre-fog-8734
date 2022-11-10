import { Box, Divider } from "@chakra-ui/react"
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

const data=[
    {
        title:"shoe"
    },
    {
        title:"shae1"
    },
    {
        title:"watch"
    },
    {
        title:"shbe2"
    }
]
export const SearchResults=({query,setQuery})=>{
    
    const [suggestion,setSuggestions]=React.useState([])
    const [showdrop,setShowdrop]=React.useState(false)

    React.useEffect(()=>{
        if(query==""){
            setShowdrop(false)
            setSuggestions([])
        }else{
            setShowdrop(true)
            let lowertext=query.toLowerCase()
            let newsugg=data.filter((el)=>{
                return el.title.toLowerCase().indexOf(lowertext) !== -1?true:false;
            }).map((el)=>el.title)
            if(!newsugg.length){
                setShowdrop(false)
            }else{
            setSuggestions(newsugg)
            }
        }
    },[query])

    const closeshowtab=()=>{
      setShowdrop(false)
      setQuery("")
    }

   return(
    showdrop&&<Box   border='1px solid black' w={{base:'50%',md:'50%',lg:'50%'}} margin='auto' ml={{base:'0',md:'26%',lg:'26%'}} mt={{base:'195px',md:'60px',lg:'60px'}} pt='20px' position='fixed' bgColor='white' zIndex='3'>
        {
            suggestion.map((el,ind)=>{
                return <Box key={ind}><Box p='15px'>{el}</Box><Divider orientation='horizontal' /></Box>
            })
        }
        <Box position='absolute' right='10px' top='5px'>
             <FontAwesomeIcon icon={faXmarkCircle} color='black' cursor='pointer' onClick={closeshowtab} fontSize={30}></FontAwesomeIcon>
        </Box>
    </Box>
   )
}