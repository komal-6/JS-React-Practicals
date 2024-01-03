import React, { Component } from 'react'

class Conditional_Rendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    //Short circuit operator
    return this.state.isLoggedIn && <div>Welcome Komal</div>

    //By using ternary operator
    /*return this.state.isLoggedIn ? 
        (<div>Welcome Komal</div>):
        (<div>Welcome Guest</div>)*/
     


    //Using Element Variable
    /* let message 
    if(this.state.isLoggedIn){
        message = <div>Welcome Komal</div>
    }else{
        message = <div>Welcome Guest</div>
    }
    return <div>{message}</div>
    */

    //Using if-else
    /*if(this.state.isLoggedIn){
        return(
            <div>Komal</div>
        )
    }
    else{
        return(
            <div>Welcome guest</div>
        )
    }*/

    // return (
    //   <div>
    //     <div>Welcome Komal</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default Conditional_Rendering
