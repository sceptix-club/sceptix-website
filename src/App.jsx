import { useState,lazy,Suspense, useEffect,useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { MainContextProvider } from './Context/MainContext';
const Landing = lazy(()=> import("./components/landing/landing"))
const TeamPage = lazy(()=> import("./components/team/team"))
const Sidebar = lazy(()=> import("./components/sidenav/sidebar.jsx"))
const AboutUs = lazy(()=> import("./components/About/about.jsx"))
const EventOrRegister = lazy(()=> import("./Context/EventOrRegister"))
const AddEvent = lazy(()=> import ('./pages/AddEvent/AddEvent.jsx'))
const LoginOrAdmin = lazy(()=> import('./pages/Login/LoginOrAdmin.jsx'))

// const Main_timeline = lazy(()=> import("./components/timeline/main_timeline"))



function App() {
  const [count, setCount] = useState(0)
  return (
    <MainContextProvider>
      
    <Router>
      <div className='bg-black scroll-smooth'>
      <Suspense fallback = {<h1 className='text-black text-center'>Loading ....</h1>}>
       <Main_sidebar />
=======
       


        <Routes>
          <Route path="/" element={<><Landing/> <AboutUs/></>} />
          {/* <Route path="/home" element={<AboutUs/>}/> */}
          <Route path="/members" element={<TeamPage/>} />
          <Route path='/events' element={<EventOrRegister/>}/>
          <Route path='/login' element={<LoginOrAdmin/>}/>
          <Route path ='/addevent' element={<AddEvent/>}/>
        </Routes>
        
        
        
  </Suspense>
      </div>
    </Router>
    </MainContextProvider>
  );
}

export default App