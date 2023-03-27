import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

import TestLineGraph from "./TestLineGraph";


function App() {

  const [uname, setUname] = useState("Lassi");
  const [pw, setPw] = useState("password");

  /**
   * Sends creadentials in form data
   */
  function credentialsAsRequestParams(){

    const formData = new FormData();
    formData.append('uname', uname);
    formData.append('pw', pw);

    //Save response token in localstorage
    axios.post('http://localhost:8080/login', formData)
      .then(response => localStorage.setItem("token", response.data))
      .catch(e=>console.log(e.message))
  }

  /**
   * Request with bearer token in header
   */
  function requestWithBearerToken(){

    //Bearer token from localstorage for the request
    const config = {
      headers:{
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      withCredentials: true
    }

    axios.get('http://localhost:8080/private', config)
      .then(response => console.log(response.data))
      .catch( e => console.log(e.message))
  }

  /**
   * Sends credentials as base 64 coded basic authorization header
   */
  const credentialsAsBasicAuth = ()=>{

    //Base64 coding the string username:password
    const base64credentials =  Buffer.from(`${uname}:${pw}`).toString('base64');
   
    const config = {
      headers:{
        'Authorization': `Basic ${base64credentials}`
      },
      withCredentials: true
    }

    axios.post('http://localhost:8080/private', {}, config)
      .then(response => console.log(response.data))
      .catch( e => console.log(e.message))
  }

  credentialsAsRequestParams();
  requestWithBearerToken();

  return (
    <div>
      <TestLineGraph />
    </div>
  );
}

export default App;
