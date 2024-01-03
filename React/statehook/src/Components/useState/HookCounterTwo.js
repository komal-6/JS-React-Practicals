import React,{useState} from 'react'

function HookCounterTwo() {
    const initialCount = 0
    const [count, setCount] = useState(initialCount)
    const incrementFive = () =>{
        for(let i=0; i<5; i++){
            // setCount(count  + 1)
            setCount(prevCount => prevCount + 1)
        }
    }
  return (
    <div>
      Count: {count} <br></br>
      <button onClick={() => setCount(initialCount)}>Reset</button><br></br>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button><br></br>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
      <button onClick={incrementFive}>Increment of 5</button>
    </div>
  )
}

export default HookCounterTwo
