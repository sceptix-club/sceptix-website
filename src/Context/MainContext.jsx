import { createContext, useEffect, useState } from 'react';
import App from '../App';




export const MainContext = createContext({});

// create context provider
export const MainContextProvider = ({children})=>{

  const [showRegister,setShowRegister] = useState(false);
  const [eventName,setEventName] = useState("")
  const [newEvents,setNewEvents] = useState(null)
  

  return (
    <MainContext.Provider value={{showRegister,setShowRegister,eventName,setEventName,newEvents,setNewEvents}}>
      {children}
    </MainContext.Provider>
  );
}

