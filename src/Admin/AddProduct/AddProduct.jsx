import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../../Redux/action';
// import { TextField } from '@material-ui/core';
// import TextField from "@mui"

const AddProduct = () => {

    const dispatch = useDispatch()

    const [title, setTitle] = useState("")
    const [short, setShort] = useState("")
    const [category, setcategory] = useState("")
    const [gender, setgender] = useState("")
    const [imageList, setInputList] = useState([
        {
            input: "",
            input_rank: null
        }
    ]);
    const [isDisabled, setIsDisabled] = useState(false);
    const [price, setprice] = useState(0)
    const [discount, setdiscount] = useState(0)

    useEffect(() => {
        if (imageList.length > 0) {
            imageList[imageList.length - 1].input === ""
                ? setIsDisabled(true)
                : setIsDisabled(false);
        }
    });

    const handleListAdd = () => {
        setInputList([
            ...imageList,
            {
                input: "",
                input_rank: null
            }
        ]);
    };

    const handleRemoveItem = (index) => {
        const newList = [...imageList];
        newList.splice(index, 1);
        setInputList(newList);
    };

    const handleInputChange = (event, index) => {
        const { value } = event.target;
        const newInputList = [...imageList];
        newInputList[index].input = value;
        newInputList[index].input_rank = index + 1;
        setInputList(newInputList);
    };

    const handleclick = () => {
        let obj = {
            title,
            short,
            category,
            imageList,
            gender,
            price,
            discount
        }
        dispatch(addProduct(obj))
        // console.log(obj);

    }

    // console.log(imageList);

    return (
        <div>
            <input onChange={(e) => setTitle(e.target.value)} type="text" placeholder='title' />
            <input type="text" onChange={(e) => setShort(e.target.value)} placeholder='Short Description' />
            <select onChange={(e) => setcategory(e.target.value)}>
                <option value="">Choose</option>
                <option value="Beachwear">Beachwear</option>
                <option value="Coats">Coats</option>
                <option value="Jackets">Jackets</option>
                <option value="Shirts">Shirts</option>
                <option value="Shorts">Shorts</option>
                <option value="Suits">Suits</option>
            </select>
            <select onChange={(e) => setgender(e.target.value)}>
                <option value="Men">Men</option>
                <option value="Women">Women</option>
            </select>
            {imageList.length > 0
                ? imageList.map((input, index) => (
                    <div key={index}>
                        <button>{index + 1}</button>
                        <input
                            id="outlined-basic"
                            label={`input ${index + 1}`}
                            variant="outlined"
                            onChange={(event) => handleInputChange(event, index)}
                        />
                        <button
                            disabled={imageList.length === 1}
                            onClick={() => handleRemoveItem(index)}>
                            <span role="img" aria-label="x emoji">
                                ❌
                            </span>
                        </button>
                    </div>
                ))
                : "No item in the list "}
            <button onClick={handleListAdd} disabled={isDisabled}>
                Add choice
            </button>
            <input onChange={(e) => setprice(e.target.value)} type="number" placeholder='price' />
            <input onChange={(e) => setdiscount(e.target.value)} type="number" placeholder='Discount' />
            <button onClick={handleclick}>Submit</button>
        </div>
    );
};

export default AddProduct;