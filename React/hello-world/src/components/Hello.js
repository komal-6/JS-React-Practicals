import React, { createElement } from "react";

//Using JSX
// const Hello = () =>{
//     return(
//         <div>
//             <h1>Hello Komal</h1>
//         </div>
//     )
// }

//Without suing JSX
const Hello = () =>{
    return(
        <div className='dummyClass'>
            <h1>Hello Komal</h1>
        </div>
    )
    // return createElement('div',{id:'Hello',className:'dummyClass'},React.createElement('h1',null,"Hello Komal"))
}
export default Hello;