import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentName: 'Parent'
      }
      this.greetParent = this.greetParent.bind(this);   
    }
    
    greetParent(childName){
        // alert('Hello' + this.state.parentName)
        alert(`Hello ${this.state.parentName} from ${childName}`)  //Back ticks and curly braces is the feature of ES6
    }

  render() {
    return (
      <div>
        {/* Pass method as porps */}
        <ChildComponent greetHandler={this.greetParent}/> 
      </div>
    )
  }
}

export default ParentComponent
