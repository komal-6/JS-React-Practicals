import React from 'react'
import { fetchUserbyId, fetchUsers } from '../Redux/User/UserAction'
import { connect } from 'react-redux'
import { useEffect } from 'react'

function UserContainer({userData,fetchUsers}) {
    useEffect (() =>{
        fetchUsers()
    },[])
    return  userData.loading ? (<h2>Loading</h2>): 
    userData.error ? (<h2>{userData.error}</h2>): 
  (<div>
    <h2>UsersList</h2>
    <div>
        {userData.users.map(user => <p>{user.id} : {user.name}</p>)}
    </div>
  </div>);
    }
    


const mapStateToProps = state =>{
    return{
        userData: state.user
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        fetchUsers: () => dispatch(fetchUsers()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (UserContainer)
