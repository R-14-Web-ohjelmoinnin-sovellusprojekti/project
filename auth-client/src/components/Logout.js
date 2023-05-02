import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout(props) {
  const navigate = useNavigate();

  const confirmLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      handleLogout();
    }
    navigate("/");
  }
  
  const handleLogout = async () => {
    props.setUserToken(null);
    window.localStorage.removeItem("token");
    navigate("/", { replace: true });
  };

  return (
    <button onClick={confirmLogout}>Logout</button>
  );
}

export default Logout;