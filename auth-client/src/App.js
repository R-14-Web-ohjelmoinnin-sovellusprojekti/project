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
import Graphs from './components/Graphs';


function App() {

  let  authRoutes = <>

  <Route path="/signup" element={ <SignUp />} />
  <Route path="/login" element={ <Login />} />
</>


return (
<BrowserRouter>
  <div>
    <div className="navbar">
      <Link to="/"><div>Home</div></Link>
      <Link to="/about"><div>About</div></Link>
      <Link to="/graphs"><div>Visualization Graphs</div></Link>
    </div>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/about" element={ <About />} />
      <Route path="/graphs" element={ <Graphs />} />
      { authRoutes }

      <Route path="/TestLineGraph" element={ <TestLineGraph />} />
    </Routes>

  </div>
</BrowserRouter>


);
}

export default App;
