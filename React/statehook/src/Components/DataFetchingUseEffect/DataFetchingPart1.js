import React, {useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingPart1() {
    const [post, setPost] = useState({}) //Instead of passing array, we pass the object into {}
    const [id, setId] = useState(2)
    const [idFromButtonClicked, setIdFromButtonClicked] = useState(1)
    const handleClick = () =>{
        setIdFromButtonClicked(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClicked}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        })
        .catch(error =>{
            console.log(error)
        })
    },[idFromButtonClicked])
  return (
    <div>
        <input type='text' value={id} onChange={e => setId(e.target.value)}/>
        <button type="button" onClick={handleClick}>Fetch Post</button>
        <div>{post.id} {post.title}</div>
       {/* <ul>
        {
            post.map(posts => (<li key={posts.id}>{posts.title}</li>))
        }
       </ul> */}
    </div>
  )
}

export default DataFetchingPart1
