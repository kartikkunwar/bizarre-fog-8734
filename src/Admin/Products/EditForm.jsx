import React, { useEffect, useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import {  updateProduct } from '../../Redux/action';
import { useNavigate } from 'react-router-dom';

const EditForm = ({titleprop,shortprop,categoryprop,genderprop,imageprop,priceprop,discountprop,id}) => {

    console.log(imageprop,id);

    const navigate = useNavigate()

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
        setTitle(titleprop)
        setShort(shortprop)
        setcategory(categoryprop)
        setgender(genderprop)
        setInputList(imageprop)
        setprice(priceprop)
        setdiscount(discountprop)

    },[]);

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
            id,
            title,
            short,
            category,
            imageList,
            gender,
            price,
            discount
        }
        dispatch(updateProduct(obj))
        navigate("/updateproduct")
        // dispatch(addProduct(obj))
        // console.log(obj);

    }

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>General Form</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                <li className="breadcrumb-item active">Edit Products</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        {/* left column */}
                        <div className="col-md-6">
                            {/* general form elements */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Products</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <div>
                                    <div className="card-body">
                                        <div className="div-group">
                                            <label htmlFor="exampleInputEmail1">Title</label>
                                            <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" placeholder="Enter Title" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Short Description</label>
                                            <input value={short} onChange={(e) => setShort(e.target.value)} type="text" className="form-control" placeholder="Enter Short Description" />
                                        </div>
                                        {/* select */}
                                        <div className="form-group">
                                            <label>Category</label>
                                            <select value={category} onChange={(e) => setcategory(e.target.value)} className="custom-select">
                                                <option value="">Choose</option>
                                                <option value="Beachwear">Beachwear</option>
                                                <option value="Coats">Coats</option>
                                                <option value="Jackets">Jackets</option>
                                                <option value="Shirts">Shirts</option>
                                                <option value="Shorts">Shorts</option>
                                                <option value="Suits">Suits</option>
                                            </select>
                                        </div>
                                        {/* select */}
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <select value={gender} onChange={(e) => setgender(e.target.value)} className="custom-select">
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
                                                            value={input.input}
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
                                            <label htmlFor="exampleInputEmail1">Price</label>
                                            <input value={price} onChange={(e) => setprice(e.target.value)} type="number" className="form-control" placeholder="Enter Price" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputEmail1">Discount</label>
                                            <input value={discount} onChange={(e) => setdiscount(e.target.value)} type="text" className="form-control" placeholder="Enter Discount" />
                                        </div>
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button onClick={handleclick} style={{ marginTop: "-50px" }} className="btn btn-primary">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EditForm;