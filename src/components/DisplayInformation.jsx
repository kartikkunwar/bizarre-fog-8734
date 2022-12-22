import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getProduct, UserSignIn } from "../Redux/action"

const DisplayInformation = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    useEffect(() => {
        dispatch(getProduct())
        dispatch(UserSignIn())
    }, [])

    const data = useSelector(store => store.product)
    const logindata = useSelector(store => store.sigin)
    console.log(data);

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>150</h3>
                                    <p>New Orders</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-bag" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                    <p>Bounce Rate</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6" onClick={() => navigate("/updateuser")}>
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{logindata.length}</h3>
                                    <p>User Registrations</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        <div className="col-lg-3 col-6" onClick={() => navigate("/updateproduct")}>
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>{data.length}</h3>
                                    <p>Products</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DisplayInformation;