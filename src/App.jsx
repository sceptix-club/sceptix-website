import { useState,lazy,Suspense, useEffect,useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { RegisterProvider } from './Context/RegisterContext';
// import EventOrRegister from './Context/EventOrRegister';
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
const EventOrRegister = lazy(()=> import("./Context/EventOrRegister"))

// const Main_timeline = lazy(()=> import("./components/timeline/main_timeline"))



function App() {
  const [count, setCount] = useState(0)
  return (
    <RegisterProvider>
      
    <Router>
      <div className='bg-black scroll-smooth'>
      <Suspense fallback = {<h1 className='text-black text-center'>Loading ....</h1>}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<><Landing/></>} />
          <Route path="/home" element={<AboutUs/>}/>
          <Route path="/members" element={<TeamPage/>} />
          <Route path='/events' element={<EventOrRegister/>}/>
          
          {/* <Route path="/events" element={register ? <RegisterForm/> : <EventPage/>} /> */}
          {/* <Route path="/timeline" element={<Main_timeline/>} /> */}
        </Routes>
        
        
        
  </Suspense>
      </div>
    </Router>
    </RegisterProvider>
  );
}

export default App