import React from 'react'
import { useState } from 'react'
import { validate } from 'react-email-validator';


function RegisterForm() {
  const [otpField,setOtpField] = useState("hidden")
  const [registerButton,setRegisterButton] = useState("")
  const [userName,setUserName] = useState("")
  const [email,setEmail] = useState("")
  const [otp,setOtp] = useState("")
  const [messageFromServer,setMessageFromServer] = useState("")

  const handleOtpSubmit = (e)=>{
    e.preventDefault()
    if(!validate(email) || email === ""){
      alert("Please enter a valid email")
      return
    }
    else if(userName === ""){
      alert("Please enter a valid username")
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

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!validate(email) || email === ""){
      alert("Please enter a valid email")
      return
    }
    else if(userName === ""){
      alert("Please enter a valid username")
      return
    }
    else{
    try{
    fetch("http://localhost:3000/api/reg",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        userName,
        email,
      })
    }).then(res=>res.json())
    .then(data=>{
      if(data.message == "Registration Successfull"){
        setMessageFromServer("Registration successfull")
      }
      else if (data.message == "This email Id already registerd"){
        setMessageFromServer("This email Id already registerd")
      }
      else if (data.message == "otp sent sucessfull"){
        setOtpField("")
        setRegisterButton("hidden")
      }
      else if (data.message != "otp sent sucessfull"){
        setMessageFromServer(data.message)
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
        <h1 className='text-center text-white py-8 font-extrabold text-4xl'>Registration</h1>
        <form action="">
          <div className='mt-10'>
            <label name = "username" className='text-white font-bold text-2xl'>Username</label>
            <input onChange={(e)=>{setUserName(e.target.value)}} type="text" name='userName' className='w-full h-10 bg-transparent border-2 border-white rounded-md text-white font-semibold font-serif text-xl' />
          </div>
          <div className='mt-10'>
            <label name="email" className='text-white font-bold text-2xl'>Email</label>
            <input onChange={(e)=>setEmail(e.target.value)} type="text" name='email' className='w-full h-10 bg-transparent border-2 border-white rounded-md text-white font-semibold font-serif text-xl' />
          </div>
            
          <div className={`mt-10 ${otpField}`}>
            <label name = "otp" className='text-white font-bold text-2xl'>OTP</label>
            <input onChange={(e)=>{setOtp(e.target.value)}} type="text" className='w-full h-10 bg-transparent border-2 border-white rounded-md text-white' />
          </div>
          
          {/* <div className={`mt-10 `}>
            <p className='text-white text-center'>This is a message from the server</p>
          </div> */}

          {messageFromServer === "Registration successfull" && <div className='text-white mt-8 text-center text-lg font-semibold'>{messageFromServer}</div>}
          {messageFromServer === "This email Id already registerd" && <div className='text-white mt-8 text-center text-lg font-semibold'>{messageFromServer}</div>}


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