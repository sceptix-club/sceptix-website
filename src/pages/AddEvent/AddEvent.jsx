import React,{useState,useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { MainContext } from '../../Context/MainContext'



function AddEvent() {
    const navigate = useNavigate()
    const {isAdmin} = useContext(MainContext)
    const [newEventName,setNewEventName] = useState("")
    const [newEventDate,setNewEventDate] = useState("")
    const [newEventInfo,setNewEventInfo] = useState("")
    const [newEventImage,setNewEventImage] = useState()
    const [imgName,setImgName] = useState('')

    useEffect(()=>{
        if(!isAdmin){
            navigate('/login')
        }
    
    })


    const handleSubmit = async(e)=>{
        e.preventDefault()
        let formData = new FormData();
        formData.append('newEventName',newEventName)
        formData.append('newEventDate',newEventDate)
        formData.append('newEventInfo',newEventInfo)
        formData.append('newEventImage',newEventImage)
        formData.append('imgName',imgName)
        try{
            let response = await fetch('http://localhost:3000/api/addEvent',{
                method:'POST',
                body:formData
            })
            let data = await response.json()
            alert(data.message)


        }
        catch(error){
            console.log(error)
        }


    }
    

  return (
    <>
    <div className='flex justify-center items-center h-screen flex-col'>
        <form onSubmit={handleSubmit}>

    <input onChange={(e)=>setNewEventName(e.target.value)} className=' rounded-lg' type='text' placeholder='EventName'/><br></br>
    <input onChange={(e)=>setNewEventDate(e.target.value)} type="date" placeholder='DD-MM-YYYY' /><br></br>
    <textarea onChange={(e)=>setNewEventInfo(e.target.value)} type='text' placeholder='eventInfo'/><br></br>
    <input onChange={(e)=>{
        setNewEventImage(e.target.files[0])
    }} className='text-white center' type='file'/>
    <input onChange={(e)=>setImgName(e.target.value)} type='text' placeholder='image file name '/>
    <button type='submit' className='text-white text-2xl'>Submit</button>
        </form>
    

    </div>
    </>
  )
}

export default AddEvent