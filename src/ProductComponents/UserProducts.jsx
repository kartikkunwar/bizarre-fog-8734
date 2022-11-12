import { Button } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useSearchParams } from 'react-router-dom';
import { getProductList } from '../ReduxProducts/action';
import "./UserProduct.css"
const UserProducts = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams()
  const location = useLocation()


  const productList = useSelector((store) => store.productList)

  useEffect(() => {
    if (location || productList.length === 0) {
      const productCategory = searchParams.getAll("category")

      const queryParams = {
        params: {
          category: productCategory,
          _sort: searchParams.get('sortBy') && "price",
          _order: searchParams.get('sortBy')
        },
      }
      // console.log("inside",productCategory)
      dispatch(getProductList(queryParams))
    }

  }, [location.search])
  return (
    <>
      {productList.length > 0 && productList.map(product => {
        return (
          <div key={product.id} className="product-list">
            <div> <h3>{product.title}</h3></div>
            <div>
              <img src={product.mainImage} alt={product.title} style={{ height: "300px", width: "100%" }} />
            </div>
            <div>
              {product.category}
            </div>
            <div>
              <h4> ${product.price}</h4>

            </div>
            <div>
            <button className='button-product'>BUY NOW</button>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default UserProducts