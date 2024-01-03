import React, { Component } from 'react'

class RenderPropsPart2_click extends Component {
  render() {
        const {count, incrementCounter} = this.props
        return <button onClick={incrementCounter}> Clicked {count} times</button> 
  }
}

export default RenderPropsPart2_click
