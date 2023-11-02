import { createContext, useEffect, useState } from 'react';
import App from '../App';




export const RegisterContext = createContext({});

// create context provider
export const RegisterProvider = ({children})=>{

  const [showRegister,setShowRegister] = useState(false);
  const [eventName,setEventName] = useState("")

  return (
    <RegisterContext.Provider value={{showRegister,setShowRegister,eventName,setEventName}}>
      {children}
    </RegisterContext.Provider>
  );
}

