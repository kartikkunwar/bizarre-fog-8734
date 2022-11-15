import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, getProduct } from "../../Redux/action"
import EditProduct from './EditProduct';

import {Link} from "react-router-dom"

const DeleteForm = () => {

    const dispatch = useDispatch()

    const data = useSelector(store => store.product)

    useEffect(() => {
        dispatch(getProduct())
    }, [data])

    const handleClick = (id) =>{
        // console.log("This is ID"+id);
        dispatch(deleteProduct(id)).then((dispatch(getProduct())))
    }

    // console.log(data);

    return (
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
                <div className="card">
                    <div className="card-body p-0">
                        <table className="table table-striped projects">
                            <thead>
                                <tr>
                                    <th style={{ width: '1%' }}>
                                        #
                                    </th>
                                    <th style={{ width: '20%' }}>
                                        Product Name
                                    </th>
                                    <th style={{ width: '30%' }}>
                                        Product Image
                                    </th>
                                    <th style={{ width: '10%' }}>
                                        Gender
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
                                                        {elem.title}
                                                    </a>
                                                    <br />
                                                    <small>
                                                        {elem.short}
                                                    </small>
                                                </td>
                                                <td>
                                                    <ul className="list-inline">
                                                        {
                                                            elem.imageList.map((img) => {
                                                                return (
                                                                    <li className="list-inline-item">
                                                                        <img alt="Avatar" className="table-avatar" src={img.input} />
                                                                    </li>
                                                                )
                                                            })
                                                        }
                                                    </ul>
                                                </td>
                                                <td className="project_progress">
                                                    <small>
                                                        {elem.gender}
                                                    </small>
                                                </td>

                                                <td className="project-actions text-right">
                                                    <Link to="/editproduct" state={{elem}}>
                                                    <button className="btn btn-info btn-sm">
                                                        <i className="fas fa-pencil-alt">
                                                        </i> 
                                                        Edit                                                                                                              
                                                    </button>
                                                    </Link> 
                                                    <button onClick={()=>handleClick(elem.id)} className="btn btn-danger btn-sm">
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

    );
};

export default DeleteForm;