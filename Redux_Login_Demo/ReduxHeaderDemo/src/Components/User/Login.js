import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Feature/userSlice'
import { instance } from '../Header/HeaderFile'


const Login = () => {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const handleSubmit = (e) =>{
        e.preventDefault();
            dispatch(login({
                name: name,
                password:password,
            }))
            instance.get("/login")
            .then(response =>{
               const user = response.data
               const header = response.headers 
               console.log("User Data: ", user ,"Response Headers: ", header)
            })
            .catch(error =>{
                const errorMsg = error.message
                const header = error.response ? error.response.headers: {}
                console.log("Error message: ",errorMsg, "Header: ", header)
            })
    }
  return (
    <div className= "container">
    <div className='login'>
      <form className='login_form' onSubmit={(e) => handleSubmit(e)}>
            <h1>Login Page</h1>
            <div className="form-group">
            Name: <input type="name" value={name} className="form-control" onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="form-group">
            Password: <input type="password" value={password} className="form-control" onChange={(e) => setPassword(e.target.value)} />
            </div><br/>
            <div className="form-group">
            <button type="submit" className="submit_btn form-control btn btn-primary" >Login</button>
            </div>
      </form>
    </div>
    </div>
  )
}

export default Login
