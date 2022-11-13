import React from 'react';
import { Link } from "react-router-dom"

const NavBarAdmin = () => {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <Link to="/">
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="" className="nav-link">Home</a>
                    </li>
                </Link>
                <Link to="/contactcard">
                    <li className="nav-item d-none d-sm-inline-block">
                        <p className="nav-link">Contact</p>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default NavBarAdmin;