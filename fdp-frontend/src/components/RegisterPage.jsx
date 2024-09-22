import React from 'react'
import {useEffect, useState } from "react";
import { 
    MDBContainer, 
    MDBInput, 
    MDBBtn
} from 'mdb-react-ui-kit'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [role, setRole] = useState('ROLE_CUSTOMER');
    const [email, setEmail] = useState('');

    const[error, setError] = useState('');

    const navigator = useNavigate();

    const signup = async () =>{
        
        try{
            if(!username || !password || !confirmPassword || !email){
                setError('Please fill the fields');
                return;
            }

            if(password != confirmPassword){
                throw new Error("Passwords don't match")
            }
            
            const response = await axios.post("http://localhost:8080/api/user/signup",{
                username, password, role, email
            });

            console.log(response.data)
            navigator("/listPizza")
        }catch(error){
            console.error("Invalid username or password", error.response ? error.response.data: error.message);
            setError("Invalid username or password");
        }


    }

  return (
        <div className="container"> 
                <div className="card">
                <MDBContainer className='card-body'> 
                    <h2 className="mb-4 text-center">Sign in</h2> 
                    {error && <p className="text-danger">{error}</p>} 
                    <MDBInput wrapperClass='form-group mb-2' id='username' placeholder={"Username"} value={username} type='email'
                              onChange={(e) => setUsername(e.target.value)}/> 
                    <MDBInput wrapperClass='form-group mb-2' placeholder={"Password"} id='password' value={password} type='password'
                              onChange={(e) => setPassword(e.target.value)}/> 
                    <MDBInput wrapperClass='form-group mb-2' id='confirmPassword' placeholder={"Confirm Password"} value={confirmPassword} type='password'
                              onChange={(e) => setConfirmPassword(e.target.value)}/> 
                    <MDBInput wrapperClass='form-group mb-2' id='email' placeholder={"Email"} value={email} type='email'
                              onChange={(e) => setEmail(e.target.value)}/> 
                              <label className="form-group mb-2">Is Available:</label> 
                    <select className="form-select mb-4" value={role} onChange={(e) => setRole(e.target.value)}> 
                        <option>Please choose option</option>
                        <option value="ROLE_CUSTOMER">USER</option> 
                        <option value="ROLE_ADMIN">ADMIN</option> 
                    </select> 
                    <button className="btn btn-success"
                            onClick={signup}>sign in</button> 
                </MDBContainer> 
            </div> 
        </div> 
    );
}

export default RegisterPage