import React, { useState } from 'react';
import axios from 'axios';
import Constants from '../Constants.json'
import { useNavigate } from 'react-router-dom'



export default function SignUp(props) {
  const navigate = useNavigate();
  const [signupProcessState, setSignupProcessState] = useState("idle")
  const [uname, setUname] = useState('');
  const [pw, setPw] = useState('');


  const HandleSignupSubmit = async (event) => {
    event.preventDefault();
    setSignupProcessState("Processing");
    const formData = new FormData();
    formData.append('uname', uname);
    formData.append('pw', pw);


    //Send post request
    try {
      const result = await axios.post(Constants.API_ADDRESS + '/register', formData)
      setSignupProcessState("SignupSuccess");
      console.log(result);

      //navigating to login view, after timeout
      setTimeout(() => {
        navigate('/login', { replace: true });
      }, 1500)

    } catch (error) {
      console.error(error);
      setSignupProcessState("SignUpFailure")
    }
  }

  // signup button handler
  let signupUIControls = null;
  switch (signupProcessState) {

    case "idle":
      signupUIControls = <button type="submit">Signup</button>
      break;

    case "processing":
      signupUIControls = <span style={{ color: 'blue' }}>Processing...</span>
      break;

    case "signupSuccess":
      signupUIControls = <span style={{ color: 'green' }}>SignUp Success</span>
      break;

    case "signupFailure":
      signupUIControls = <span style={{ color: 'red' }}>Error</span>
      break;

  }


  return (
    <div className='signup-container'>
      <div className='signup-form'>
      <h2>Sign up</h2>

      <form onSubmit={ HandleSignupSubmit }>
        <div>
          Username <br />
          <input type="text" onChange={(e) => {setUname(e.target.value);}} />
        </div>
        <div>
          Password <br />
          <input type="password" onChange={(e) => {setPw(e.target.value);}} />
        </div>
        <div>
          {signupUIControls}
        </div>
      </form>
      </div>
    </div>
  );
}
