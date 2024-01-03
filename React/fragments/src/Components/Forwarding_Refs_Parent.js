import React, { Component } from 'react'
import Forwarding_Refs from './Forwarding_Refs'

class Forwarding_Refs_Parent extends Component {
    constructor(props) {
      super(props)

      this.inputRef = React.createRef()
    }
    
    clickHandler = () => {
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <Forwarding_Refs ref={this.inputRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default Forwarding_Refs_Parent
