import { Box, Button, Image, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getProductList } from '../Redux/action';
import "./UserProduct.css"
const UserProducts = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  const location = useLocation()


  const productList = useSelector((store) => store.product)
  // console.log(productList)

  useEffect(() => {
    if (location || productList.length === 0) {
      const productCategory = searchParams.getAll("category")

      const productGender = searchParams.getAll("gender")


      const queryParams = {
        params: {
          gender:productGender,
          category: productCategory,
          _sort: searchParams.get('sortBy') && "price",
          _order: searchParams.get('sortBy')
        },
      }
    
      dispatch(getProductList(queryParams))
    }

  }, [location.search])
  return (
    <>
      {productList.length > 0 && productList.map(product => {
        return (
         <Link to={`/product/${product.id}`}> <Box key={product.id} h='100%' className="product-list" display='flex' flexDirection='column' gap='2%' justifyContent='center' alignItems='center'>
            <Box h="60%" display='flex'  alignItems='center'>
              <Image src={product.mainImage} alt={product.title}  h='100%' w='100%'/>
            </Box>
            <Box h='5%' display='flex'  alignItems='center'> <Text fontSize='18px' fontWeight='bold'>{product.title}</Text></Box>
            <Box h='5%' display='flex'  alignItems='center'>
              <Text fontSize='18px' fontWeight='bold'> ${product.price}</Text>
            </Box>
            <Box h='5%' display='flex'  alignItems='center'>
            <button className='button-product'>BUY NOW</button>
            </Box>
          </Box></Link>
        )
      })}
    </>
  )
}

export default UserProducts