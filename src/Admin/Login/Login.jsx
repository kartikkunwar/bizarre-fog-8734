import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Navigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleclick = () => {
        let obj = {
            email,
            password
        }
        console.log(obj);
        if (obj.email === "admin@gmail.com" && obj.password === "admin") {
            alert("correct");
            // <Link to="/dashboard" replace={true} />
        } else {
            alert("Wrong")
        }
    }

    return (
        <div style={{ margin: "auto", marginTop: "10%" }} className="login-box">
            <Link to="/">
                <div className="login-logo">
                    <a href="#"><b>One</b>Stop</a>
                </div>
            </Link>
            {/* /.login-logo */}
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">Sign in to start your session</p>
                    <div>
                        <div className="input-group mb-3">
                            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Email" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-envelope" />
                                </div>
                            </div>
                        </div>
                        <div className="input-group mb-3">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" placeholder="Password" />
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {/* /.col */}
                            <div style={{ margin: "auto" }} className="col-4">
                                <button onClick={handleclick} type="submit" className="btn btn-primary btn-block">Sign In</button>
                            </div>
                            {/* /.col */}
                        </div>
                    </div>
                    {/* /.social-auth-links */}
                    <p className="mb-1">
                        <a href="#">Back To Home</a>
                    </p>
                </div>
                {/* /.login-card-body */}
            </div>
        </div>
    );
};

export default Login;