import React, { Component } from 'react'

class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

      //Binding in the class constuctor
      this.clickHandler = this.clickHandler.bind(this)
    }
    
    // clickHandler(){
    //     this.setState({
    //         message:'Good bye'
    //     })
    //     console.log(this)
    // }

    //Class property with arrow function
    clickHandler = () =>{
        this.setState({
            message:'Good Bye'
        })
        console.log(this)
    }
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* Binding in the render method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* Arrow function in render method */}
        {/* <button onClick={()=> this.clickHandler()}>Click</button> */}

        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind
