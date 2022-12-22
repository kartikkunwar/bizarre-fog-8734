import React from 'react';
import { Link } from "react-router-dom"
import logo from "../Admin/Photo/ONE STOP.png"
import kartik from "../Admin/Photo/kartik.jpeg"

const SidePannalAdmin = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="/" className="brand-link">
                <img src={logo} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">OneStop</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src={kartik} className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Admin</a>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                </p>
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
                                <p>Add Product</p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/updateuser" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Update Users
                                </p>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/adduser" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>Add Users</p>
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* /.sidebar-menu */}
            </div>
            {/* /.sidebar */}
        </aside>
    );
};

export default SidePannalAdmin;