import React, { Component } from 'react'
import Input_Class_Component from './Input_Class_Component'

class FocusInput extends Component {
    constructor(props) {
      super(props)

      this.componentRef = React.createRef()
      
    }
    
    clickHandler = () =>{
        this.componentRef.current.focusInput()
    }
  render() {
    return (
      <div>
        <Input_Class_Component ref={this.componentRef}/>
        <button onClick={this.clickHandler}>FocusInput</button>
      </div>
    )
  }
}

export default FocusInput
