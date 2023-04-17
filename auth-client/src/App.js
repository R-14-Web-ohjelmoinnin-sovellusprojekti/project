import { useState } from "react";
import axios from "axios";
import { Buffer } from "buffer";

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



function App() {

  let  authRoutes = <>

  <Route path="/signup" element={ <SignUp />} />
  <Route path="/login" element={ <Login />} />
  <Route path="/V1-V3" element={ <V1_V3 />} />
  <Route path="/V4-V5" element={ <V4_V5 />} />
</>


return (
<BrowserRouter>
  <div>
    <div className="navbar">
      <Link to="/"><div>Home</div></Link>
      <Link to="/About"><div>About</div></Link>
      <Link to="/GraphsControl"><div>Visualization Graphs</div></Link>
    </div>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/About" element={ <About />} />
      <Route path="/GraphsControl" element={ <GraphsControl />} />
      { authRoutes }

      <Route path="/TestLineGraph" element={ <TestLineGraph />} />
    </Routes>

  </div>
</BrowserRouter>


);
}

export default App;
