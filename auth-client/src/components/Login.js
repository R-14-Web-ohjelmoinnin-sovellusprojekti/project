import React, { useState } from "react";
import axios from "axios";
import Constants from '../Constants.json'
import { useNavigate } from 'react-router-dom'
import './components.css'



export default function Login(){

    const navigate = useNavigate();

    const [uname, SetUname] = useState(' ');
    const [pw, SetPw] = useState(' ');

    const handleLoginSubmit = async (event) => {
    event.preventDefault()
    
    try {
    const result = await axios.post(Constants.API_ADDRESS + '/login', {},
    {
        params:{
            uname,
            pw
        }
    });
        console.log(result);
        const token = result.data
        localStorage.setItem("token", result.data)
        console.log(token)

        navigate('/', {replace: true });
    }
    catch (error){
        console.log(error);
    }
}   
    

    return (
    <div className="login-container">
        <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={ handleLoginSubmit }>
            <div>
            Username<br/>
            <input type="text" onChange={(e) => {SetUname(e.target.value);}}/>
        </div>
        <div>
            Password<br/>
            <input type="password" onChange={(e) => {SetPw(e.target.value);}}/>
        </div>
        <div>
            <button block="true" type="submit">Login</button>
        </div>
        </form>
        </div>
    </div>
            
    );
}