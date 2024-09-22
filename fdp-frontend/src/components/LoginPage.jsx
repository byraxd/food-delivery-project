import React from 'react'
import {useEffect, useState } from "react";
import { 
    MDBContainer, 
    MDBInput, 
    MDBBtn
} from 'mdb-react-ui-kit'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const[error, setError] = useState('');

    const navigator = useNavigate();

    const signin = async () =>{
        
        try{
            if(!email || !password){
                setError('Please fill the fields');
                return;
            }
            
            const response = await axios.post("http://localhost:8080/api/user/signin",{
                email, password
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
                    <MDBInput wrapperClass='form-group mb-2' id='email' placeholder={"Email"} value={email} type='email'
                              onChange={(e) => setEmail(e.target.value)}/> 
                    <MDBInput wrapperClass='form-group mb-2' placeholder={"Password"} id='password' value={password} type='password'
                              onChange={(e) => setPassword(e.target.value)}/> 
                    {error && <p className="text-danger">{error}</p>} 
                    <button className="btn btn-success"
                            onClick={signin}>sign in</button> 
                </MDBContainer> 
            </div> 
        </div> 
    );
}

export default LoginPage