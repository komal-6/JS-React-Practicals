import React, {useState} from 'react'
import { MemoizedChild2 } from './Child2'

function Parent2() {
    const [count, setCount] = useState(0)
    const [name,setName] = useState('Komal')
    console.log('Parent2 Render')
  return (
    <div>
       <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
       <button onClick={() => setName('Codevolution')}>Change Name</button>
       <MemoizedChild2 name={name}/>
    </div>
  )
}

export default Parent2