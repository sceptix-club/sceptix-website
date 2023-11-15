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
    <div className='min-h-screen lg:py-40 py-10 bg-gray-950'>
      <div>
        <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row w-10/12 lg:w-8/12  bg-gray-900 rounded-xl mx-auto overflow-hidden'>
            <div className='w-full lg:w-5/12 p-40 bg-no-repeat bg-contain bg-center m-2' style={{backgroundImage: `url('public/HackToFuture - 26 April 2023.jpg')`}}>
            </div>
            <div className='w-full w-5/12 lg:w-2/3 lg:py-24 py-4 px-12 lg:border-2 lg:m-2'>
            <h2  className='text-4xl mb-4 text-blue-400 font-semibold text-center lg:text-left'>Register</h2>
            <form action="">
              <div className='mt-5'>
                <input readOnly = {readOnly}  onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder="Name" className='border border-gray-400 py-1 px-2 w-full rounded-lg'/>
              </div>
              <div className='mt-5'>
                <input readOnly = {readOnly} onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder="Email" className='border border-gray-400 py-1 px-2 w-full rounded-lg'/>
              </div>
              <div className={`mt-5 ${otpField}`}>
                <input onChange={(e)=>{setOtp(e.target.value)}} value={otp} type="text" placeholder="Enter the OTP sent to your mail" className='border border-gray-400 py-1 px-2 w-full rounded-lg'/>
              </div>
              <div className='text-white p-1 text-center'>
                  <p>test mesage</p>
              </div>
              <div className='mt-5'>
                <button onClick={handleSubmit} className={` ${registerButton} w-full bg-blue-900 py-3 text-center text-white rounded-xl lg:hover:bg-white lg:hover:text-blue-900`}>Submit</button>
                {registerButton === "hidden" && <button onClick={handleOtpSubmit} className='w-full bg-blue-900 py-3 text-center text-white rounded-xl lg:hover:bg-white lg:hover:text-blue-900'>Register</button>}
              </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
    )
}
export default RegisterForm