import React, { useEffect } from 'react'
import DnaLoading from '../Loading/DnaLoading'
import { useState,useContext } from 'react'
import { validate } from 'react-email-validator';
import {MainContext} from '../../Context/MainContext'
import { fas } from '@fortawesome/free-solid-svg-icons';


function RegisterForm() {
 
  const [otpField,setOtpField] = useState("hidden")
  const [loading,setLoading] = useState(false)
  const [registerButton,setRegisterButton] = useState("")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [otp,setOtp] = useState("")
  const [messageFromServer,setMessageFromServer] = useState("")
  const [readOnly,setReadOnly] = useState(false)
  const {eventName,setEventName} = useContext(MainContext)
  const {eventImage,setEventImage} = useContext(MainContext)
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
      setLoading(true)
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
          setLoading(false)
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
    {/* <div hidden = {!loading}  className='w-screnn h-screen bg-black'>
      <DnaLoading/>

    </div> */}
    <div className='mt-5 max-h-screen  bg-gray-950 flex w-screen flex-col justify-center xl:mt-32'>
      
      <div>
        <div
        //  hidden = {loading} 
        className='container mx-auto'>

        {/* {eventName != undefined &&  <h1 className='text-center text-white py-4 font-extrabold text-4xl'>{`Registration For ${eventName}`}</h1>} */}

          <div  className='flex flex-col lg:flex-row w-10/12 lg:w-8/12  bg-gray-900 rounded-xl mx-auto overflow-hidden'>
          
            <div  className='w-full lg:w-5/12 p-40 bg-no-repeat bg-contain bg-center m-2' style={{backgroundImage: `url(${eventImage})`}}>
            </div>
            <div  className='w-full w-5/12 lg:w-2/3 lg:py-24 py-4 px-12 lg:border-2 lg:m-2'>
            <h2  className='text-4xl mb-4 text-blue-400 font-semibold text-center lg:text-left'>Register</h2>
            <form action="">
              <div className='mt-5'>
                <input readOnly = {readOnly}  onChange={(e)=>{setName(e.target.value)}} value={name} type="text" placeholder="Name" className='border border-gray-400 py-1 px-2 w-full rounded-lg'/>
              </div>
              <div className='mt-5'>
                <input readOnly = {readOnly} onChange={(e)=>setEmail(e.target.value)} onKeyDown={(e)=> {
                  if(e.keyCode == 13 && email !== ""){
                    e.preventDefault()
                    handleSubmit()
                  }
                } } value={email} type="text" placeholder="Email" className='border border-gray-400 py-1 px-2 w-full rounded-lg'/>
              </div>
              <div className={`mt-5 ${otpField}`}>
                <input onChange={(e)=>{setOtp(e.target.value)}} onKeyDown={(e)=>{
                  if(e.keyCode == 13 && otp != "" ){
                    e.preventDefault()
                    handleOtpSubmit()
                  }
                }} value={otp} type="text" placeholder="Enter the OTP sent to your mail" className='border border-gray-400 py-1 px-2 w-full rounded-lg'/>
              </div>
              {/* <div className='text-white p-1 text-center'>
                  <p>test mesage</p>
              </div> */}

              {messageFromServer != "" && <div className=' font-serif text-white mt-3 text-center text-base font-semibold'>{messageFromServer}</div>}

              <div className='mt-5'>
                <button hidden = {loading} onClick={handleSubmit} className={` ${registerButton} w-full bg-blue-900 py-3 text-center text-white rounded-xl lg:hover:bg-white lg:hover:text-blue-900`}>Submit</button>
                {loading ? <button onClick={handleOtpSubmit} className='flex justify-center w-full bg-blue-900 py-3 text-center text-white rounded-xl lg:hover:bg-white lg:hover:text-blue-900'>
                  <div className='w-6 h-6 bg-white flex justify-center rounded-full items-center'>
                    <div className='w-4 h-2 bg-black rounded-full animate-spin'></div>
                  </div>
                </button> : ""}
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