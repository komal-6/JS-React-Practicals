import React, {useState, useEffect} from 'react'

function HookCounterOneuseEffect() {
    const [count, setCount] = useState(0)
    const [name,setName] = useState('')

    useEffect(() =>{
      console.log('useEffect - Udating document title')
        document.title = `You clicked ${count} times`
    },[count]) //Second pramater is a array of value that the effect on
  return (
    <div>
      <input type='text' value={name} onChange={e => setName(e.target.value)}/>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  )
}

export default HookCounterOneuseEffect
