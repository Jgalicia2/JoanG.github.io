
import './App.css';
import reportWebVitals from "./reportWebVitals";

// Imports for all components needed for changing pages 
import { Route, Routes } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import About from "./components/About";

//gutters horizontal and vertical 
import React from 'react';

function App() {
  //any backend functionality

  //Will be displayed on website
  return (

    <div class="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Resume" element={<Resume />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
      </Routes>

    </div >

  );
}
reportWebVitals(console.log);
export default App;
