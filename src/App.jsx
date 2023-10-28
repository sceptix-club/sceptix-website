import { useState,lazy,Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
// import Landing from './components/landing/landing'
// import TeamPage from './components/team/team'
// import Sidebar from "./components/sidenav/sidebar.jsx";
// import AboutUs from "./components/About/about.jsx";
// import EventPage from './components/Events/events.jsx'
// import Main_timeline from './components/timeline/main_timeline';
// import RegisterForm from './components/RegisterForm/registerForm';
const Landing = lazy(()=> import("./components/landing/landing"))
const TeamPage = lazy(()=> import("./components/team/team"))
const Sidebar = lazy(()=> import("./components/sidenav/sidebar.jsx"))
const AboutUs = lazy(()=> import("./components/About/about.jsx"))
const EventPage = lazy(()=> import("./components/Events/events.jsx"))
const Main_timeline = lazy(()=> import("./components/timeline/main_timeline"))
const RegisterForm = lazy(()=> import("./components/RegisterForm/registerForm"))

import './App.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className='bg-black scroll-smooth'>
        <Sidebar />
        <Suspense fallback = {<h1>Loading ....</h1>}>
        <Routes>
          <Route path="/" element={<><Landing/></>} />
          <Route path="/home" element={<AboutUs/>}/>
          <Route path="/events" element={<EventPage/>} />
          <Route path="/members" element={<TeamPage/>} />
          <Route path="/register" element={<RegisterForm/>}/>
          {/* <Route path="/timeline" element={<Main_timeline/>} /> */}

          
        </Routes>
        </Suspense>
        
      </div>
    </Router>
  );
}

export default App