import React, {useState, useMemo, useCallback} from 'react'
import { MemoizedChild3 } from './Child3'
import { MemoizedChild5 } from './Child5'

function Parent4() {
    const [count, setCount] = useState(0)
    const [name,setName] = useState('Komal')
    const person = {
        fname: 'Komal',
        lname: 'Panchal'
    }

    //useMemo with react memo to optimized componrnet re-rendering
    const memoizedPerson = useMemo(()=> person, [])
    const handleClick = () =>{

    }

    //useCallback with react memo to optimized componrnet re-rendering
    const memoizedHandleClick = useCallback(handleClick, [])

    console.log('Parent4 Render')
  return (
    <div>
       <button onClick={() => setCount((c) => c + 1)}>Count - {count}</button>
       <button onClick={() => setName('Codevolution')}>Change Name</button>
       <MemoizedChild5 name={name} person={memoizedHandleClick}/>

    </div>
  )
}

export default Parent4