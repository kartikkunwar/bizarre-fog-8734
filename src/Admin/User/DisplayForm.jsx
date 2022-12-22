import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserSignIn } from "../../Redux/action"

const DisplayForm = () => {

    const dispatch = useDispatch()

    const data = useSelector((store) => store.sigin)

    useEffect(() => {
        dispatch(UserSignIn())
    }, [])

    // console.log(data);

    const handleClick = (id) =>{
        // console.log("This is ID"+id);
        // dispatch(deleteProduct(id)).then((dispatch(getProduct())))
        axios.delete(`http://localhost:8080/sigin/${id}`)
        .then((res)=>{
            dispatch(UserSignIn())
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    return (
        <div>
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Projects</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Admin</a></li>
                                    <li className="breadcrumb-item active">Update Products</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Default box */}
                    <div className="card-primary" style={{background:"white",borderRadius:"20px"}}>
                        <div className="card-body p-0">
                            <table className="table table-striped projects">
                                <thead>
                                    <tr>
                                        <th style={{ width: '1%' }}>
                                            #
                                        </th>
                                        <th style={{ width: '20%' }}>
                                            User Name
                                        </th>
                                        <th style={{ width: '30%' }}>
                                            Email
                                        </th>
                                        <th style={{ width: '35%' }}>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((elem, index) => {
                                            return (
                                                <tr>
                                                    <td>
                                                        {index + 1}
                                                    </td>
                                                    <td>
                                                        <a>
                                                            {elem.name}
                                                        </a>
                                                    </td>
                                                    <td>
                                                        <ul className="list-inline">
                                                            {
                                                                elem.email
                                                            }
                                                        </ul>
                                                    </td>
                                                    <td className="project-actions text-right">
                                                        <Link to="/edituser" state={{ elem }}>
                                                            <button className="btn btn-info btn-sm">
                                                                <i className="fas fa-pencil-alt">
                                                                </i>
                                                                Edit
                                                            </button>
                                                        </Link>
                                                        <button
                                                         onClick={()=> handleClick(elem.id)} 
                                                         className="btn btn-danger btn-sm">
                                                            <i className="fas fa-trash">
                                                            </i>
                                                            Delete
                                                        </button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                        {/* /.card-body */}
                    </div>
                    {/* /.card */}
                </section>
                {/* /.content */}
            </div>
        </div>
    );
};

export default DisplayForm;