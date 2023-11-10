import { createContext, useEffect, useState } from 'react';
import App from '../App';




export const MainContext = createContext({});

// create context provider
export const MainContextProvider = ({children})=>{


  const [showRegister,setShowRegister] = useState(false);
  const [eventName,setEventName] = useState("")
  const [newEvents,setNewEvents] = useState(null)
  const [isAdmin,setIsAdmin] = useState(false)
  const [showAddEvent,setShowAddEvent] = useState(false)

  


  return (
    <MainContext.Provider value={{showRegister,setShowRegister,eventName,setEventName,newEvents,setNewEvents,isAdmin,setIsAdmin,showAddEvent,setShowAddEvent}}>
      {children}
    </MainContext.Provider>
  );
}

