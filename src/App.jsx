import { useState } from 'react'
import './App.css'
import Landing from './components/landing/landing'
import TeamPage from './components/team/team'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidenav/sidebar.jsx";
import Main_sidebar from './components/sidenav/main_sidebar.jsx';
import AboutUs from "./components/About/about.jsx";
import EventPage from './components/Events/events.jsx'
import Main_timeline from './components/timeline/main_timeline';

import './App.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='bg-black scroll-smooth'>
        <Main_sidebar />

        <Routes>
          <Route path="/" element={<><Landing/> <AboutUs/></>} />
          {/* <Route path="/home" element={<AboutUs/>}/> */}
          <Route path="/events" element={<EventPage/>} />
          <Route path="/members" element={<TeamPage/>} />
          {/* <Route path="/timeline" element={<Main_timeline/>} /> */}

          
        </Routes>
        
      </div>
    </Router>
  );
}

export default App