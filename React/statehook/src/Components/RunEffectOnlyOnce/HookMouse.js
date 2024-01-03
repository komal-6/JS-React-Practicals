import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)
    const logMousePosition = (e) =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(() =>{
        console.log('useEffect Called')
        window.addEventListener('mousemove',logMousePosition)
        
        return () =>{
          console.log('Component unmounting code')
          window.removeEventListener('mousemove',logMousePosition)
        }
    },[]) //Second Parameter this effect does not depend on any props or state

    
  return (
    <div>
        Hook X- {x} Hook Y-{y}
    </div>
  )
}

export default HookMouse
