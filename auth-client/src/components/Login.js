import React, { useState, useContext } from "react";
import axios from "axios";
import Constants from '../Constants.json'
import { useNavigate } from 'react-router-dom'
import './components.css'
import { UserAuthContext } from '../Contexts'


//axios.defaults.silent = true;

export default function Login(props) {

    //const UserAuthContextValue = useContext(UserAuthContext);
    let navigate = useNavigate();

    const [uname, setUname] = useState('');
    const [pw, setPw] = useState('');
    const [loginProcess, setLoginProcess] = useState("idle");

    const handleLoginSubmit = async (event) => {
        event.preventDefault()
        setLoginProcess("processing");
        setTimeout(async () => {
            try {
                const result = await axios.post(Constants.API_ADDRESS + '/login', {}, {
                    params: {
                        uname,
                        pw
                    }
                });
                console.clear();
                // console.log(result);
                // console.log(result.data);
                const token = result.data
                
                setLoginProcess("success");
                setTimeout(() => {
                    props.login(token);
                    //localStorage.setItem("token", result.data)
                    //UserAuthContextValue.login(result.data.token);
                    navigate("/about", { replace: true });
                }, 1500);
            }
            catch (error) {
                console.log(error);
                setLoginProcess("error");
                setTimeout(() => setLoginProcess("idle"), 1500);
            }
        }, 1500);
    }


    let loginUIControls = null;
    switch (loginProcess) {
        case "idle":
            loginUIControls = <button type="submit">Login</button>
            break;

        case "processing":
            loginUIControls = <span style={{ color: 'blue' }}>Processing login...</span>
            break;

        case "success":
            loginUIControls = <span style={{ color: 'green' }}>Login successful</span>
            break;

        case "error":
            loginUIControls = <span style={{ color: 'red' }}>Error</span>
            break;

        default:
            loginUIControls = <button type="submit">Login</button>
    }


    return (
        <div className="login-container">
            <div className="login-form">
                <h2>Login</h2>
                <form onSubmit={handleLoginSubmit}>
                    <div>
                        Username<br />
                        <input type="text" onChange={(e) => { setUname(e.target.value); }} />
                    </div>
                    <div>
                        Password<br />
                        <input type="password" onChange={(e) => { setPw(e.target.value); }} />
                    </div>
                    <div>
                        {loginUIControls}
                    </div>
                </form>
            </div>
        </div>

    );
}
