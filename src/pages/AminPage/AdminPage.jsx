import React, { useEffect, useState,useContext } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {MainContext} from '../../Context/MainContext'
import UpComingEventCardForAdmin from '../AdminEventCard/upComingEventCardForAdmin'
import Login from '../Login/Login'

function AdminPage() {
  const {newEvents,setNewEvents} = useContext(MainContext)
  // const {showAddEvent,setShowAddEvent} = useContext(MainContext)  
    

    const getData = async()=>{
        await axios
        .get("http://localhost:3000/api/getUpComingEvent")
        .then((res)=> {
          setNewEvents(res.data[0])  
        })
        .catch((err)=> console.log(err," it has an error"))

        
        
    }
    useEffect(()=>{
        getData()
        
     },[]);

    //create a function to convert buffer to base64
  

        


     

    

    

   return (
    <>
    <div className=''>
      {/* {newEvents.map((items)=>{
        console.log(items)

      })} */}
      {newEvents === null  && <div className='text-white'>No data</div>}
      {newEvents  && <UpComingEventCardForAdmin eventName = {newEvents.eventName} date = {newEvents.eventDate} eventInfo = {newEvents.eventInfo} image = {newEvents.eventImage} _id = {newEvents._id}/>  }
      <div className='flex justify-center '>
    <button onClick={()=>{
      // setShowAddEvent(true)
    }} className='text-white text-5xl '><Link to="/addevent">Add Event</Link></button>
    </div>
    </div>
    
    </>
  )
}

export default AdminPage