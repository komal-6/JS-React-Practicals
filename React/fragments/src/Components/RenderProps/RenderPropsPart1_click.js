import React, { Component } from 'react'

class RenderPropsPart1_click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }
    
    incrementCounter = () =>{
        this.setState(prevState =>{
            return {count: prevState.count + 1}
        })
    }
  render() {
    const { count } = this.state
    return (
      <button onClick={this.incrementCounter}>Clicked {count} Times</button>
    )
  }
}

export default RenderPropsPart1_click
