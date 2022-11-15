import React from 'react';
import { Link } from "react-router-dom"
import logo from "../Admin/Photo/ONE STOP.png"

const SidePannalAdmin = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="/">
                <a href="#" className="brand-link">
                    <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">OneStop</span>
                </a>
            </Link>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <Link to="/dashboard">
                    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src={logo} className="img-circle elevation-2" alt="User Image" />
                        </div>
                        <div className="info">
                            <a href="#" className="d-block">Admin</a>
                        </div>
                    </div>
                </Link>
                <div className="form-inline">
                    <div className="input-group" data-widget="sidebar-search">
                        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                        <div className="input-group-append">
                            <button className="btn btn-sidebar">
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item menu-open">
                            <Link to="/dashboard">
                                <a href="#" className="nav-link active">
                                    <i className="nav-icon fas fa-tachometer-alt" />
                                    <p>
                                        Dashboard
                                    </p>
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/updateproduct" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Update Product
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addproduct" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Add Product
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/updateuser">
                                <a href="#" className="nav-link">
                                    <i className="nav-icon fas fa-edit" />
                                    <p>
                                        Update Users
                                    </p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>


    );
};

export default SidePannalAdmin;