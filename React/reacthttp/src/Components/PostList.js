import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts: [],
         error: ''
      }
    }
     
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            console.log(response)
            this.setState({posts: response.data})
        })
        .catch(error =>{
            console.log(error)
            this.setState({
                errorMsg: 'Error retriving the data'
            })
        })
    }
  render() {
    const {posts, errorMsg} = this.state
    return (
      <div>
        List of Posts
        {
            posts.length ?
            posts.map(posts => <div>{posts.id} : {posts.title}</div>):
            null
        }
        {
            errorMsg ?  <div>{errorMsg}</div> :null
        }
      </div>
    )
  }
}

export default PostList
