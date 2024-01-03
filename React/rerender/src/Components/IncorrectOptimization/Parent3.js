import React, {StrictMode, useState} from 'react'
import { MemoizedChild3 } from './Child3'
import { MemoizedChild4 } from './Child4'

function Parent3() {
    const [count, setCount] = useState(0)
    const [name,setName] = useState('Komal')
    console.log('Parent3 Render')
  return (
    <div>
       <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
       <button onClick={() => setName('Codevolution')}>Change Name</button>
       <MemoizedChild4 name={name}/>
       {/* <MemoizedChild3 name={name}>
        <strong>Hello</strong>
        </MemoizedChild3> */}
    </div>
  )
}

export default Parent3