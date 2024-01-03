import React from "react";

// function Greet(){
//     return <h1>Hello Komal</h1>
// }

// const Greet = () => <h1>Hello Komal</h1>

// const Greet = ({name, heroName}) => {
//     // console.log(props);
//     return (
//         <div>
//             <h1>Hello {name} a.k.a {heroName}</h1>
//             {/* {props.children} */}
//         </div>
//     )
// }

const Greet = props => {
    const {name,heroName} = props
    // console.log(props);
    return (
        <div>
            <h1>Hello {name} a.k.a {heroName}</h1>
            {/* {props.children} */}
        </div>
    )
}   
export default Greet;