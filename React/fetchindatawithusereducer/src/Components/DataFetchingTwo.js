import React, {useReducer, useEffect} from 'react'
import axios from 'axios'


const initialState = {
    loading: true,
    error: '',
    posts: {}
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading: false,
                posts: action.payload,
                error: ''
            }
        case 'FETCH_ERROR':
            return{
                loading: false,
                posts: {},
                error: 'Something Went Wrong'
            }
            default: 
                return false
    }
}
function DataFetchingTwo() {
   const [state, dispatch] = useReducer(reducer, initialState)

   useEffect(() =>{
    axios.get('https://jsonplaceholder.typicode.com/posts/1')
    .then(response =>{
        dispatch({type: 'FETCH_SUCCESS', payload: response.data})
    })
    .catch(error =>{
        dispatch({type: 'FETCH_ERROR'})
    })
},[])
  return (
    <div>
       {state.loading ? 'Loading' : state.posts.title}
       {state.error ? state.error : null}
    </div>
  )
}

export default DataFetchingTwo
