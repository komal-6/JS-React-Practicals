import { FETCH_USERS_ERROR, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from './UserType'
import {instance} from './HeaderFile'

export const fetchUsersRequest = () =>{
    return{
        type: FETCH_USERS_REQUEST  
    }
}

export const fetchUsersSuccess = users =>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersError = error =>{
    return{
        type: FETCH_USERS_ERROR,
        payload: error
    }
}

export const fetchUsers = () =>{
    return (dispatch) =>{
        dispatch(fetchUsersRequest())
        instance.get("/users")
        .then(response =>{
            const user = response.data
            const header = response.headers
            console.log("User Details: ",user,"Header: ",header)
            dispatch(fetchUsersSuccess(user, header))
        })
        .catch(error =>{
            const errorMsg = error.message
            const header = error.response ? error.response.headers: {}
            console.log("Error Message:",errorMsg, "Header: ", header)
            dispatch(fetchUsersError(errorMsg, header))
        })
    }
}
