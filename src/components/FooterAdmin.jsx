import React from 'react';
import { Link } from 'react-router-dom';

const FooterAdmin = () => {
    return (
        <footer className="main-footer">
            <strong>Copyright © 2022 <Link to="/">Onestop</Link>. </strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
                <b>Version</b> 1.0.0
            </div>
        </footer>
    );
};

export default FooterAdmin;