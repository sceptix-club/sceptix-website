import { useState,lazy,Suspense, useEffect,useContext } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { MainContextProvider } from './Context/MainContext';
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
const AdminPage = lazy(()=> import ('./pages/AminPage/AdminPage.jsx'))
const AddEvent = lazy(()=> import ('./pages/AddEvent/AddEvent.jsx'))
const Login = lazy(()=> import ('./pages/Login/Login.jsx'))
const LoginOrAdmin = lazy(()=> import('./pages/Login/LoginOrAdmin.jsx'))

// const Main_timeline = lazy(()=> import("./components/timeline/main_timeline"))



function App() {
  const [count, setCount] = useState(0)
  return (
    <MainContextProvider>
      
    <Router>
      <div className='bg-black scroll-smooth'>
      <Suspense fallback = {<h1 className='text-black text-center'>Loading ....</h1>}>
        <Sidebar />
        <Routes>
          <Route path="/" element={<><Landing/></>} />
          <Route path="/home" element={<AboutUs/>}/>
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