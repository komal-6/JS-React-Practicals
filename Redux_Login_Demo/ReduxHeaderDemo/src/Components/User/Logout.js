import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../Feature/userSlice'

const Logout = () => {
    const dispatch = useDispatch()
    const handleLogout = (e) =>{
        e.preventDefault()
        dispatch(logout())

    }
  return (
    <div>
        <div className="container">
            <h1>Welcome !!! </h1>
            <button className="logout_button btn btn-success" onClick={(e =>{handleLogout(e)})}>Logout</button>
        </div>
    </div>
  )
}

export default Logout
