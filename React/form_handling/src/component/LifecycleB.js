import React, { Component } from 'react'

export class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'Komal'
      }
      console.log("LifecycleB constructor")     //First
    }
    
    static getDerivedStateFromProps(props, state){
        console.log("Constructor LifecycleB getDerivedStateFromProps")  //Second
        return null;
    }

    componentDidMount(){
        console.log("LifecycleB componentDidMount")   //Fourth
    }

    shouldComponentUpdate(){
        console.log("LifecyleB shouldComponentUpdate")
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("LifecyleB getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate(){
        console.log("LifecyleB componentDidUpdate")
    }
  render() {
    console.log("Lifecycle B rendered")   //Third
    return (
      <div>Lifecycle B</div>
    )
  }
}

export default LifecycleB
