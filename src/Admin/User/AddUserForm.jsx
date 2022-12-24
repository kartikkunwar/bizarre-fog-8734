import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { UserRegister } from '../../Redux/action';

const AddUserForm = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [Password, setPassword] = useState("")

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleclick = (e) => {
        e.preventDefault();
        let obj = {
            name: name,
            email: email,
            password: Password
        }
        if (obj.name == "" || obj.email == "" || obj.password == "") {
            alert("Please Fill all the Details")
        }
        // console.log(obj);
        else {
            try {
                dispatch(UserRegister(obj))
                navigate("/updateuser")
                alert("User Successfully added")
            } catch (error) {
                console.log(error);
            }
        }

        // console.log(obj);
    }

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Add User</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                <li className="breadcrumb-item active">Add User</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <div className="card-primary" style={{ background: "white", borderRadius: "20px" }}>
                <div className="card-header">
                    <h3 className="card-title">Users</h3>
                </div>
                <form>
                    <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input onChange={(e) => setname(e.target.value)} type="text" className="form-control" placeholder="Enter User Name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Email Address</label>
                            <input onChange={(e) => setemail(e.target.value)} type="email" className="form-control" placeholder="Enter User Email-Address" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Enter User Password" />
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

export default AddUserForm;