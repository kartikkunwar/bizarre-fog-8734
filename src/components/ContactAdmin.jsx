import React from 'react';
import FooterAdmin from './FooterAdmin';
import NavBarAdmin from './NavBarAdmin';
import SidePannalAdmin from './SidePannalAdmin';
import juber from "../Admin/Photo/resumepic.png"
import kartik from "../Admin/Photo/kartik.jpeg"
import nagaraju from "../Admin/Photo/nagaraju.jpeg"
import rohit from "../Admin/Photo/rohit.jpeg"

const ContactAdmin = () => {
    return (
        <div className="wrapper">
            {/* Navbar */}
            <NavBarAdmin />
            {/* /.navbar */}
            {/* Main Sidebar Container */}
            <SidePannalAdmin />
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Contacts</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Contacts</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="card-solid" >
                        <div className="card-body pb-0" >
                            <div className="row" >
                            <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column" style={{height:"200px"}}>
                                    <div className="card bg-light d-flex flex-fill">
                                        <div className="card-header text-muted border-bottom-0">
                                            Full-Stack Web Developer
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h2 className="lead"><b>Kartik Kunwar</b></h2>
                                                    <p className="text-muted text-sm"><b>About: </b> React / Redux / JavaScript / HTML / CSS</p>
                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Meerut, Uttarpradesh, India</li>
                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone : +91 7060950662</li>
                                                    </ul>
                                                </div>
                                                <div className="col-5 text-center">
                                                    <img src={kartik} alt="user-avatar" className="img-circle img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column" style={{height:"200px"}}>
                                    <div className="card bg-light d-flex flex-fill">
                                        <div className="card-header text-muted border-bottom-0">
                                            Full-Stack Web Developer
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h2 className="lead"><b>Juber Shaikh</b></h2>
                                                    <p className="text-muted text-sm"><b>About: </b> React / Redux / JavaScript / HTML / CSS</p>
                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Aurangabad, Maharashtra, India</li>
                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone : +91 8055154446</li>
                                                    </ul>
                                                </div>
                                                <div className="col-5 text-center">
                                                    <img src={juber} alt="user-avatar" className="img-circle img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column" style={{height:"200px"}}>
                                    <div className="card bg-light d-flex flex-fill">
                                        <div className="card-header text-muted border-bottom-0">
                                            Full-Stack Web Developer
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h2 className="lead"><b>Medida Nagaraju</b></h2>
                                                    <p className="text-muted text-sm"><b>About: </b> React / Redux / JavaScript / HTML / CSS</p>
                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Veeraghattam, Andrapradesh, India</li>
                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone : +91 7306657264</li>
                                                    </ul>
                                                </div>
                                                <div className="col-5 text-center">
                                                    <img src={nagaraju} alt="user-avatar" className="img-circle img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column" style={{height:"200px",marginTop:"50px"}}>
                                    <div className="card bg-light d-flex flex-fill">
                                        <div className="card-header text-muted border-bottom-0">
                                            Full-Stack Web Developer
                                        </div>
                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h2 className="lead"><b>Rohit Kumar</b></h2>
                                                    <p className="text-muted text-sm"><b>About: </b> React / Redux / JavaScript / HTML / CSS</p>
                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-building" /></span> Address: Dhanbad, Jharkhand, India</li>
                                                        <li className="small"><span className="fa-li"><i className="fas fa-lg fa-phone" /></span> Phone : +91 7877770938</li>
                                                    </ul>
                                                </div>
                                                <div className="col-5 text-center">
                                                    <img src={rohit} alt="user-avatar" className="img-circle img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
            <FooterAdmin />
        </div>

    );
};

export default ContactAdmin;