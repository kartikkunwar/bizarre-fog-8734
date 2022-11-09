import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./login.css"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Login = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const handleclick = () =>{
        let obj={
            email,
            password
        }
        console.log(obj);
        if(obj.email === "admin" && obj.password === "admin"){
            alert("correct")
        }else{
            alert("Wrong")
        }
    }

    return (
        <>
        <h1 className="text-center">Admin Login</h1>
        <Form className='boss'>
            <Form.Group className="mb-3 p-2">
                <Form.Label>Email address</Form.Label>
                <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3 p-2" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>
            <div className="d-grid gap-2">
                <Button onClick={handleclick} className='d-grid gap-2' variant="primary" size="lg" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
        </>
    );
};

export default Login;