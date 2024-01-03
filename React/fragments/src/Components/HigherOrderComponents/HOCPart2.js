import React from "react";

const HOCPart2 = (WrappedComponent,incrementNumber) =>{  //WrappedComponent as also identify as the NewComponent
    class HOCPart extends React.Component{

        constructor(props) {
            super(props)
          
            this.state = {
               count: 0
            }
          }
          
          incrementCounter = () =>{
            this.setState(prevState=>{    //We need the previous state increment the value the argument to setState will not be a simple object
                return {count: prevState.count + incrementNumber}
            })       
          }
        render(){ 
            // console.log(this.props.name)
            return <WrappedComponent 
            count={this.state.count} 
            incrementCounter={this.incrementCounter}
            {...this.props}
            />
        }
    }
    return HOCPart
}

export default HOCPart2