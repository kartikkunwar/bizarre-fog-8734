import { useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addProduct } from '../../Redux/action';

const AddForm = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const toast = useToast()

    const [title, setTitle] = useState("")
    const [short, setShort] = useState("")
    const [category, setcategory] = useState("")
    const [gender, setgender] = useState("Men")
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

    const handleclick = (event) => {
        event.preventDefault()
        let obj = {
            title,
            short,
            category,
            imageList,
            gender,
            price,
            discount
        }
        if (obj.title == "" || obj.short == "" || obj.category == "" || obj.price == "" || obj.discount == "" || obj.imageList[0].input == "") {
            alert("Please fill all the details")
        } else {
            dispatch(addProduct(obj))
            navigate("/updateproduct")
            alert("Product Successfully added")
        }
        // console.log(obj);

    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Add Products</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                <li className="breadcrumb-item active">Add Products</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card-primary" style={{ background: "white", borderRadius: "20px" }}>
                <div className="card-header">
                    <h3 className="card-title">Products</h3>
                </div>
                <form>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Title</label>
                            <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Enter Title" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Short Description</label>
                            <input onChange={(e) => setShort(e.target.value)} type="text" className="form-control" placeholder="Enter Short Description" />
                        </div>
                        <div className="form-group">
                            <label>Category</label>
                            <select onChange={(e) => setcategory(e.target.value)} className="form-control">
                                <option value="">Choose</option>
                                <option value="Beachwear">Beachwear</option>
                                <option value="Coats">Coats</option>
                                <option value="Jackets">Jackets</option>
                                <option value="Shirts">Shirts</option>
                                <option value="Shorts">Shorts</option>
                                <option value="Suits">Suits</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>gender</label>
                            <select onChange={(e) => setgender(e.target.value)} className="form-control">
                                <option value="Men">Men</option>
                                <option value="Women">Women</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Image</label>
                            {imageList.length > 0
                                ? imageList.map((input, index) => (
                                    <div style={{ display: "flex" }} key={index}>
                                        <input type="text"
                                            label={`input ${index + 1}`}
                                            className="form-control"
                                            placeholder="Image"
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
                            <button onClick={handleListAdd} disabled={isDisabled} style={{ marginTop: "10px" }} type="button" class="btn btn-primary btn-block"><i class="fa fa-bell"></i> Add Image</button>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Price</label>
                            <input onChange={(e) => setprice(e.target.value)} type="number" className="form-control" placeholder="Enter Price" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Discount</label>
                            <input onChange={(e) => setdiscount(e.target.value)} type="text" className="form-control" placeholder="Enter Discount" />
                        </div>
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddForm;