import React, { Component } from 'react'
import HOCPart2 from './HOCPart2'

class HigherOrderPart1_Click extends Component {
  render() {
    const {count, incrementCounter} = this.props
    return (
      <div>
        <button onClick={incrementCounter}>{this.props.name} Clicked {count} times</button>
      </div>
    )
  }
}

export default HOCPart2(HigherOrderPart1_Click,5)

