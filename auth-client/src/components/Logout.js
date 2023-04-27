import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout(props) {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    props.setUserToken(null);
    window.localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
}

export default Logout;