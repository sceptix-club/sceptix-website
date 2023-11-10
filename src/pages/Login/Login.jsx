import React, { useEffect,useContext } from 'react'
import { useState } from 'react'
import AdminPage from '../AminPage/AdminPage';
import { MainContext } from '../../Context/MainContext';







function Login() {
  // var salt = bcrypt.genSaltSync(10);
  // var hashedPass= bcrypt.hashSync("B4c0/\/", salt);
  const [key,setKey]  = useState("")
  const {isAdmin,setIsAdmin} = useContext(MainContext)
  
 

  const handleSubmit = async()=>{
    
    
    await fetch("http://localhost:3000/api/checkforadmin",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
       
      },
      body:JSON.stringify({
        key:key
      })
    }).then((res)=>res.json())
    .then((data)=>{setIsAdmin(data.data)
      {data.data == false ? alert("You enterd wrong key") : ""}
    })
    .catch((err)=>console.log(err))
  }
  return (
    <>
    <div className='flex justify-center items-center h-screen w-screen  '>
      <div className=' w-96 h-96 bg-black flex justify-center items-center'>
        <input value={key} className='rounded-xl placeholder:font-bold placeholder:text-center h-10' placeholder='key' type='password' onChange={(e)=>{setKey(e.target.value)}}/>
        <button className='text-white  mt-10 text-center font-extrabold text-3xl' type='submit' onClick={handleSubmit}>Submit</button>
      </div>
      

    </div>
    
    </>
  )
}

export default Login