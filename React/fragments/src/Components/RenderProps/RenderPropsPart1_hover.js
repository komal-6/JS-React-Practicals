import React, { Component } from 'react'

class RenderPropsPart1_hover extends Component {
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
    const {count} = this.state
    return (
      <div>
        <h2 onMouseOver={this.incrementCounter}>Hovered {count} times</h2>
      </div>
    )
  }
}

export default RenderPropsPart1_hover
