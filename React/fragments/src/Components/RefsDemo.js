import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
      super(props)
    
      this.inputRef = React.createRef()
      this.cbRef = null
      //Assign property with DOM element
      this.setCbRef = (element) =>{
        this.cbRef = element
      }
    }

    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()   //In this DOM node directly accessed using the ref property
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    
    clickHandler = () => {
        alert("Your name is: "+ this.inputRef.current.value)
    }
    
  render() {
    return (
      <div>
        Name: <input type='text' ref={this.inputRef}/><br></br>
        Name: <input type='text' ref={this.setCbRef}/><br></br>
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo
