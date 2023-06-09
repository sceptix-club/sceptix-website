import { useState } from 'react'
import './App.css'
import Landing from './components/landing/landing'
import TeamPage from './components/team/team'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidenav/sidebar.jsx";
import Members from "./components/sidenav/Members.jsx";
import AboutUs from "./components/About/about.jsx";
import EventPage from './components/Events/events.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='bg-black'>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/events" element={<AboutUs/>} />
          <Route path="/members" element={<TeamPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App