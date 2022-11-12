import React from 'react';

const SidePannalAdmin = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <a href="index3.html" className="brand-link">
                <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">OneStop</span>
            </a>
            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a href="#" className="d-block">Admin</a>
                    </div>
                </div>
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
                            <a href="#" className="nav-link active">
                                <i className="nav-icon fas fa-tachometer-alt" />
                                <p>
                                    Dashboard
                                </p>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Product
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/forms/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Add Products</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/advanced.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Remove Products</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/editors.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Update Products</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/validation.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Show Product</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a href="#" className="nav-link">
                                <i className="nav-icon fas fa-edit" />
                                <p>
                                    Users
                                    <i className="fas fa-angle-left right" />
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                    <a href="pages/forms/general.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Add Users</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/advanced.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Remove Users</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/editors.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Update Users</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="pages/forms/validation.html" className="nav-link">
                                        <i className="far fa-circle nav-icon" />
                                        <p>Show Users</p>
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>


    );
};

export default SidePannalAdmin;