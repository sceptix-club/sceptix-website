import React, { useContext } from 'react'
import { MainContext } from '../../Context/MainContext'
import Login from '../Login/Login'
import AdminPage from '../AminPage/AdminPage'
import AddEvent from '../AddEvent/AddEvent'

function LoginOrAdmin() {
    const {isAdmin} = useContext(MainContext)
    const {showAddEvent,setShowAddEvent} = useContext(MainContext) 
  return (
    <>
    {isAdmin ? <AdminPage/> : <Login/>}
    {/* {isAdmin && showAddEvent ? <AddEvent/> :null} */}

    </>
    
  )
}

export default LoginOrAdmin