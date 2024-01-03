import React from 'react'

// function Forwarding_Refs() {
//   return (
//     <div>
//       <input type='text'/>
//     </div>
//   )
// }

const Forwarding_Refs = React.forwardRef((props,ref) => {
    return (
             <div>
                <input type='text' ref={ref}/>
             </div>
           )
    })

export default Forwarding_Refs
