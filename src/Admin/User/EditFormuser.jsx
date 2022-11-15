import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { UserSignIn } from "../../Redux/action"
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const EditFormuser = ({nameprop,emailprop,idprop}) => {

    const dispatch = useDispatch()
    const navigate =useNavigate()

    const [email,setEmail] = useState("")
    const [name,setname] = useState("")

    useEffect(() => {

        setEmail(emailprop)
        setname(nameprop)


    },[]);

    const handleclick = ()=>{
        let obj={
            name,
            email
        }
        // console.log(obj);
        axios.patch(`http://localhost:8080/sigin/${idprop}`,obj)
        .then((res)=>{
            dispatch(UserSignIn())
            navigate("/updateuser")
            // console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
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
                                <li className="breadcrumb-item active">Edit User</li>
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
                                    <h3 className="card-title">User</h3>
                                </div>
                                {/* /.card-header */}
                                {/* form start */}
                                <div>
                                    <div className="card-body">
                                        <div className="div-group">
                                            <label htmlFor="exampleInputEmail1">Email</label>
                                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" className="form-control" placeholder="Enter Title" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="exampleInputPassword1">Name</label>
                                            <input value={name} onChange={(e) => setname(e.target.value)} type="text" className="form-control" placeholder="Enter Short Description" />
                                        </div>
                                        {/* select */}
                                        {/* select */}
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer">
                                        <button
                                         onClick={handleclick} 
                                         style={{ marginTop: "-50px" }} className="btn btn-primary">Submit</button>
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

export default EditFormuser;