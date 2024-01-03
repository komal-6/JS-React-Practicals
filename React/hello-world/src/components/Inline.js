import React from 'react'

//By uisng inline styling
const heading ={
    fontSize:'72px',
    color: 'green'
}
function Inline() {
  return (
    <div>
      <h1 className='error'>Error</h1>
      <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline
