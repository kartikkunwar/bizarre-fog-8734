import { Box, Divider, Image } from "@chakra-ui/react"
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useRef } from "react"
import { Link } from "react-router-dom"


export const SearchResults = ({ query, setQuery }) => {

    const [suggestion, setSuggestions] = React.useState([])
    const [showdrop, setShowdrop] = React.useState(false)
    const [dt, setDt] = React.useState([])
    const [act, setAct] = React.useState(0)

    const kartik = () => {
        return axios.get("http://localhost:8080/product")
            .then((res) => setDt(res.data))
            .catch((err) => console.log(err))
    }

   
    React.useEffect(()=>{
         kartik()
       
        if(query==""){
            setShowdrop(false)
            setSuggestions([])
        } else {
            setShowdrop(true)
            let lowertext=query.toLowerCase()
            let newsugg=dt.filter((el)=>{
                return el.title.toLowerCase().indexOf(lowertext) !== -1 ? true : false;;
            }).map((el)=>el)
            console.log(newsugg)
            if(!newsugg.length){
                setShowdrop(false)
            } else {
                setSuggestions(newsugg)
            }
        }
    }, [query])
    
     const menuRef=useRef();

    React.useEffect(()=>{
        document.addEventListener('mousedown',(e)=>{
            if(!menuRef.current.contains(e.target)){
                setShowdrop(false)
                setQuery("")
            }
        })
    },[])

    const closeshowtab = () => {
        setShowdrop(false)
        setQuery("")
    }

   return(
    showdrop&&<Box ref={menuRef}  border='1px solid black' w={{base:'70%',md:'50%',lg:'50%'}} margin='auto' ml={{base:'0',md:'26%',lg:'26%'}} mt={{base:'195px',md:'60px',lg:'60px'}} pt='20px' maxH='300px' overflow='auto' position='fixed' top='0' bgColor='white' zIndex='3' >
        {
            suggestion.map((el,ind)=>{
                return (<Link to={`/product/${el.id}`}><Box key={ind} pl='15px' h="60px" display='flex' alignItems='center'>
                    <Box w={{base:'40%',md:'40%',lg:'15%'}}  h='100%' pl='2%'><Image src={el.imageList[0].input} h='100%' w='80%'/></Box>
                    <Box w={{base:'60%',md:'60%',lg:'85%'}} pl='10px'>{el.title}</Box>
                    </Box><Divider orientation='horizontal' /></Link>)
                })
            }
            <Box position='absolute' right='10px' top='5px'>
                <FontAwesomeIcon icon={faXmarkCircle} color='black' cursor='pointer' onClick={closeshowtab} fontSize={30}></FontAwesomeIcon>
            </Box>
        </Box>
    )
}