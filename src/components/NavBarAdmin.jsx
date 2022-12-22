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
                <Link to="/dashboard">
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="index3.html" className="nav-link">Home</a>
                    </li>
                </Link>
                <Link to="/contactcard">
                    <li className="nav-item d-none d-sm-inline-block">
                        <a href="#" className="nav-link">Contact</a>
                    </li>
                </Link>
            </ul>
        </nav>
    );
};

export default NavBarAdmin;