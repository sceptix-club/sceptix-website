import React from 'react'
import EventPage from '../components/Events/events'
import RegisterForm from '../components/RegisterForm/registerForm'
import { MainContext } from './MainContext'

function EventOrRegister() {
    const {showRegister,setShowRegister} = React.useContext(MainContext)
    

  return (
   <>
    {showRegister ? <RegisterForm/> : <EventPage/>}
   
   
   </>
  )
}

export default EventOrRegister