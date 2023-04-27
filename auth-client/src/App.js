import TestLineGraph from "./TestLineGraph";
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from "./components/Login";
import Logout from "./components/Logout";
import DeleteUser from "./components/DeleteUser";
import About from './components/About';
import GraphsControl from './components/GraphsControl';
import V1_V3 from "./components/V1-V3";
import V4_V5 from "./components/V4-V5";
import { useState } from 'react';

const userTokenFromStorage = window.localStorage.getItem("token");

function App() {


  const [userToken, setUserToken] = useState(userTokenFromStorage);

  let authRoutes = <>

    <Route path="/signup" element={<SignUp />} />
    <Route path="/login" element={<Login login={newToken => {
      setUserToken(newToken)
      window.localStorage.setItem("token", newToken)
    }} />} />
  </>

  if (userToken != null) {
    authRoutes = <>
      <Route path="/GraphsControl" element={<GraphsControl />} />
      <Route path="/deleteuser" element={<DeleteUser token={userToken} username={localStorage.getItem('uname')} />} />
      <Route path="/about" element={<About />} />
      <Route path="/v1-v3" element={<V1_V3 />} />
      <Route path="/v4-v5" element={<V4_V5 />} />
      <Route path="/logout" element={<Logout setUserToken={setUserToken} />} />
    </>
  }


  return (
    <BrowserRouter>
      <div>
        <div className="navbar">
          <Link to="/"><div>Home</div></Link>
          <Link to="/About"><div>About</div></Link>
          {userToken != null && <Link to="/GraphsControl"><div>Visualization Graphs</div></Link>}
        </div>
        <Routes>
          <Route path="/" element={<Home userToken={userToken != null} />} />
          <Route path="/About" element={<About />} />
          {authRoutes}
          <Route path="*" element={<Home userToken={userToken != null} />} />
          <Route path="/TestLineGraph" element={<TestLineGraph />} />
        </Routes>

      </div>
      <footer>
        <div className="footer">
          <div className="footer-name">© 2023</div>
          <div className="footer-name">Created by: </div>
          <div className="footer-name">Tomi Kääriäinen</div>
          <div className="footer-name">Matti Nurmela</div>
          <div className="footer-name">Lassi Väisänen</div>
          <div className="footer-name">Emilia Virta</div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;