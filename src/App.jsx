import { useState } from 'react'
import './App.css'
import Landing from './components/landing/landing'
import TeamPage from './components/team/team'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/sidenav/sidebar.jsx";
import Members from "./components/sidenav/Members.jsx";
import F from './components/footer/footer.jsx';
import Footer from './components/footer/footer.jsx';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <Sidebar />

        <Routes>
          <Route path="/" element={<TeamPage/>} />
          <Route path="/events" element={<Landing/>} />
          <Route path="/members" element={<Footer/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App