import React from 'react'
import EventPage from '../components/Events/events'
import RegisterForm from '../components/RegisterForm/registerForm'
import { RegisterContext } from './RegisterContext'

function EventOrRegister() {
    const {showRegister,setShowRegister} = React.useContext(RegisterContext)
    

  return (
   <>
    {showRegister ? <RegisterForm/> : <EventPage/>}
   
   
   </>
  )
}

export default EventOrRegister