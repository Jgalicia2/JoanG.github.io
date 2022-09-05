
import './App.css';
import reportWebVitals from "./reportWebVitals";

// Imports for allm components needed for changing pages 
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import About from "./components/About";

//gutters horizontal and vertical 
import React from 'react';

function App() {
  //any backend functionality
  let PageNav
  //TODO: add a routing feature to change from each of these different pages 
  //check out the following video TimeStamp: 12:32
  //https://www.google.com/search?q=add+nav+link+to+react&oq=add+nav+link+to+react&aqs=chrome..69i57j33i160l4j33i22i29i30l5.7082j0j7&sourceid=chrome&ie=UTF-8#kpvalbx=_fB8WY6CgCfGfqtsPzO-FwAk_29
  switch (window.location.pathname) {
    case "/Home":
      PageNav = Home
      break;
    case "/Resume":
      PageNav = Resume
      break;
    case "/Contact":
      PageNav = Contact
      break;
    case "/About":
      PageNav = About
      break;

    default:
      break;
  }

  //Will be displayed on website
  return (
    //App style for css
    <div class="App">
      {/* Navigation for pages */}
      <Navbar />
      {/* function defined above which tells what page is to be shown */}
      <PageNav />

    </div >

  );
}
reportWebVitals(console.log);
export default App;
