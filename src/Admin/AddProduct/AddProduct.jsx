import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/action';

const AddProduct = () => {

    const dispatch = useDispatch()

    const [title,setTitle]=useState("")
    const [short,setShort]=useState("")
    const [category,setcategory]=useState("")
    const [gender,setgender]=useState("")
    const [price,setprice]=useState(0)
    const [discount,setdiscount]=useState(0)

    const handleclick = () =>{
        let obj={
            title,
            short,
            gender,
            category,
            price,
            discount
        }
        // dispatch(AddProduct(obj))
        dispatch(addProduct(obj))
        // console.log(obj);

    }

    return (
        <div>
            <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='title' />
            <input type="text" onChange={(e)=>setShort(e.target.value)} placeholder='Short Description' />
            <select onChange={(e)=>setcategory(e.target.value)}>
                <option value="">Choose</option>
                <option value="Beachwear">Beachwear</option>
                <option value="Coats">Coats</option>
                <option value="Jackets">Jackets</option>
                <option value="Shirts">Shirts</option>
                <option value="Shorts">Shorts</option>
                <option value="Suits">Suits</option>
            </select>
            <select onChange={(e)=>setgender(e.target.value)}>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
            </select>
            <input onChange={(e)=>setprice(e.target.value)} type="number" placeholder='price' />
            <input onChange={(e)=>setdiscount(e.target.value)} type="number" placeholder='Discount' />
            <button onClick={handleclick}>Submit</button>
        </div>
    );
};

export default AddProduct;