import React, { Component } from 'react'
import { LifecycleB } from './LifecycleB'

export class LifecycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Komal'
      }
      console.log("LifecycleA constructor")     //First
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("Constructor LifecycleA getDerivedStateFromProps")  //Second
        return null;
    }

    componentDidMount(){
        console.log("LifecycleA componentDidMount")   //Fourth
    }

    shouldComponentUpdate(){
        console.log("LifecycleA shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecycleA componentDidUpdate")
    }

    changeState = () =>{
        this.setState({
            name: 'Codevolution'
        })
    }
  render() {
    console.log("Lifecycle A rendered")   //Third
    return (
    <div>
      <div>Lifecycle A</div>
      <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
    </div>
      
    )
  }
}

export default LifecycleA
