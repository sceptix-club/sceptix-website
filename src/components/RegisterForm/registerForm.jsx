import React, { useEffect } from 'react'
import { useState,useContext } from 'react'
import { validate } from 'react-email-validator';
import {RegisterContext} from '../../Context/RegisterContext'


function RegisterForm() {
 
  const [otpField,setOtpField] = useState("hidden")
  const [registerButton,setRegisterButton] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [otp,setOtp] = useState("")
  const [messageFromServer,setMessageFromServer] = useState("")
  const [readOnly,setReadOnly] = useState(false)
  const {eventName,setEventName} = useContext(RegisterContext)
  const {showRegister,setShowRegister} = useContext(RegisterContext)
 

  const handleOtpSubmit = (e)=>{
    e.preventDefault()
    if(!validate(email) || email === ""){
      alert("Please enter a valid email")
      return
    }
    else if(name === ""){
      alert("Please enter a valid name")
      return
    }
    else if(otp.length < 4){
      alert("Enter correct 4 digit Otp")
    }

    else{
      try{
        fetch("http://localhost:3000/api/otp",{
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify({
          email,
          otp
        })

        }).then(res=>res.json())
        .then(data=>{
          if(data.message == "OTP verified"){
            setMessageFromServer("Registration successfull")
            setOtpField("hidden")
            setRegisterButton("hidden")
            setName("")
            setEmail("")
            setOtp("")
           

          }
          else if (data.message == "Invalid OTP"){
            setMessageFromServer("Invalid OTP")
          }
        })

      }
      catch(error){
        console.log(error.message)
      }
    }


  }

  useEffect(()=>{
    if(eventName === undefined){
      setMessageFromServer("Server Not Responding Now")
    }
  },[])

  const handleSubmit = (e)=>{
    e.preventDefault()
    
    if(!validate(email) || email === ""){
      alert("Please enter a valid email")
      return
    }
    else if(name === ""){
      alert("Please enter a valid name")
      return
    }
    else{
      setReadOnly(true)
    try{
    fetch("http://localhost:3000/api/reg",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name,
        email,
        eventName
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.message){
        setMessageFromServer(data.message)
        if(data.message === "otp sent sucessfull"){
          setOtpField("")
          setRegisterButton("hidden")
        }
      }
      
      
      
    })
  }
  catch(err){
    console.log("Error occured",err.message)   
  }
}
    

    
  }
  return (
    <>
   
    </>
  )
}

export default RegisterForm