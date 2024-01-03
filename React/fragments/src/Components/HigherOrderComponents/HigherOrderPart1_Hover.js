import React, { Component } from 'react'
import HOCPart2 from './HOCPart2'

class HigherOrderPart1_Hover extends Component {
  render() {
        const {count, incrementCounter} = this.props
        return <h2 onMouseOver={incrementCounter}> Hovered {count} times</h2>
  }
}

export default HOCPart2(HigherOrderPart1_Hover,10)
