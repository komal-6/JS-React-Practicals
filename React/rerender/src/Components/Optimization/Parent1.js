import React, {useState} from 'react'

function Parent1({ children }) {
    const [count, setCount] = useState(0)
    console.log('Parent1 Render')
  return (
    <div>
       <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
       {children}
    </div>
  )
}

export default Parent1