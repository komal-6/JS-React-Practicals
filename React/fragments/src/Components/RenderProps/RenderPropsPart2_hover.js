import React, { Component } from 'react'

class RenderPropsPart2_hover extends Component {
  render() {
   const {count, incrementCounter} = this.props
   return <h2 onMouseOver={incrementCounter}>Clicked {count} times</h2>
  }
}

export default RenderPropsPart2_hover
