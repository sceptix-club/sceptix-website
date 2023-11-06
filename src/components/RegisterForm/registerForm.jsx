import React, { useEffect } from 'react'
import { useState,useContext } from 'react'
import { validate } from 'react-email-validator';
import {MainContext} from '../../Context/MainContext'


function RegisterForm() {
 
  const [otpField,setOtpField] = useState("hidden")
  const [registerButton,setRegisterButton] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [otp,setOtp] = useState("")
  const [messageFromServer,setMessageFromServer] = useState("")
  const [readOnly,setReadOnly] = useState(false)
  const {eventName,setEventName} = useContext(MainContext)
  const {showRegister,setShowRegister} = useContext(MainContext)
 

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
    <div className='flex w-full h-screen bg-black items-center justify-center'>
      <div className='bg-bkack w-80 h-screen'>
        
        {eventName != undefined &&  <h1 className='text-center text-white py-8 font-extrabold text-4xl'>{`Registration For ${eventName}`}</h1>}
        
       
        <form action="">
          <div className='mt-10'>
            <label name = "name" className='text-white font-bold text-2xl'>Name</label>
            <input readOnly = {readOnly}  onChange={(e)=>{setName(e.target.value)}} value={name} type="text" name='name' className='w-full h-10 bg-transparent border-2 border-white rounded-md text-white font-semibold font-serif text-xl' />
          </div>
          <div className='mt-10'>
            <label name="email" className='text-white font-bold text-2xl'>Email</label>
            <input  readOnly = {readOnly} onChange={(e)=>setEmail(e.target.value)} value={email} type="text" name='email' className='w-full h-10 bg-transparent border-2 border-white rounded-md text-white font-semibold font-serif text-xl' />
          </div>
            
          <div className={`mt-10 ${otpField}`}>
            <label name = "otp" className='text-white font-bold text-2xl'>OTP</label>
            <input onChange={(e)=>{setOtp(e.target.value)}} value={otp} type="text" className='w-full h-10 bg-transparent border-2 border-white rounded-md text-white font-serif' />
          </div>
          
          {/* <div className={`mt-10 `}>
            <p className='text-white text-center'>This is a message from the server</p>
          </div> */}

          {messageFromServer != "" && <div className=' font-serif text-white mt-8 text-center text-lg font-semibold'>{messageFromServer}</div>}
          {/* {messageFromServer === "This email Id already registerd" && <div className='text-white mt-8 text-center text-lg font-semibold'>{messageFromServer}</div>} */}


          <div className='mt-10 flex justify-center'>
          <button onClick={handleSubmit} className={`font-bold ${registerButton} text-2xl text-white`}>Submit</button>
          {registerButton === "hidden" && <button onClick={handleOtpSubmit} className='font-bold text-2xl text-white'>Register</button>}
          </div>

         

        </form>
      </div>
    </div>
    
    </>
  )
}

export default RegisterForm