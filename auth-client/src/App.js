import TestLineGraph from "./TestLineGraph";

import './App.css';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from "./components/Login";
import About from './components/About';
import GraphsControl from './components/GraphsControl';
import V1_V3 from "./components/V1-V3";
import V4_V5 from "./components/V4-V5";
import { useState } from 'react';


function App() {

  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [token, setUserToken] = useState(null);
  let  authRoutes = <>

  <Route path="/signup" element={ <SignUp />} />
  <Route path="/login" element={ <Login login={ (token) => {
    setIsUserLoggedIn(true);
    setUserToken(token);
  }}/>} />
</>

if(isUserLoggedIn == true){
  authRoutes = <>
  <Route path="/GraphsControl" element={ <GraphsControl />} />
  <Route path="/V1-V3" element={ <V1_V3 />} />
  <Route path="/V4-V5" element={ <V4_V5 />} />
  </>
}
return (
<BrowserRouter>
  <div>
    <div className="navbar">
      <Link to="/"><div>Home</div></Link>
      <Link to="/About"><div>About</div></Link>
      <Link to="/GraphsControl"><div>Visualization Graphs</div></Link>
    </div>
    <Routes>
      <Route path="/" element={ <Home userLoggedIn={isUserLoggedIn} />} />
      <Route path="/About" element={ <About />} />
      { authRoutes }
      <Route path="*" element={ <Home userLoggedIn={isUserLoggedIn} />} />
      <Route path="/TestLineGraph" element={ <TestLineGraph />} />
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