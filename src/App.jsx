import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Landing from './components/landing/landing'
import TeamPage from './components/team/team'

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidenav/sidebar.jsx";
import Home from "./components/sidenav/Home.jsx";
import Events from "./components/sidenav/Events.jsx";
import Members from "./components/sidenav/Members.jsx";



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Sidebar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/members" element={<Members />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App