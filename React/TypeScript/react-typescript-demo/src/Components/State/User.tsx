import React, {useState} from 'react'

type AuthUser = {
    name: string
    email: string
}
export const User = () => {
    // const [user, setUser] = useState<AuthUser | null>(null)
    const [user, setUser] = useState<AuthUser>({} as AuthUser) // Always have been accessed as AuthUser
    const handleLogin = () =>{
        setUser({
            name: 'Komal',
            email: 'komalpanchal123@gmail.com'
        })
    }
    // const handleLogout = () => {
    //     setUser(null)
    // }
  return (
    <div>
        <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <div>User name is{user?.name}</div>
      <div>User email is{user?.email}</div>
    </div>
  )
}

