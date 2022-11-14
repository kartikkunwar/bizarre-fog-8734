import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProduct, UserSignIn } from "../Redux/action"

const DisplayInformation = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProduct())
        dispatch(UserSignIn())
    }, [])

    const data = useSelector(store => store.product)
    const logindata = useSelector(store => store.sigin)
    console.log(data);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Dashboard</h1>
                        </div>{/* /.col */}
                    </div>{/* /.row */}
                </div>{/* /.container-fluid */}
            </div>
            {/* /.content-header */}
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    {/* Small boxes (Stat box) */}
                    <div className="row">
                        <div className="col-lg-3 col-6">
                            {/* small box */}
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
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>53<sup style={{ fontSize: 20 }}>%</sup></h3>
                                    <p>Sales</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-stats-bars" />
                                </div>
                                <a href="#" className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{logindata.length}</h3>
                                    <p>User Registrations</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-person-add" />
                                </div>
                                <Link to="/updateuser">
                                    <p style={{ textAlign: "center" }} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
                                </Link>
                            </div>
                        </div>
                        {/* ./col */}
                        <div className="col-lg-3 col-6">
                            {/* small box */}
                            <div className="small-box bg-danger">
                                <div className="inner">
                                    <h3>{data.length}</h3>
                                    <p>Products</p>
                                </div>
                                <div className="icon">
                                    <i className="ion ion-pie-graph" />
                                </div>
                                <Link to="/updateproduct">
                                    <p style={{ textAlign: "center" }} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></p>
                                </Link>
                            </div>
                        </div>
                        {/* ./col */}
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            {/* /.content */}
        </div>

    );
};

export default DisplayInformation;