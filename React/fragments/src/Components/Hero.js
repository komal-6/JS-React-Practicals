import React from 'react'

function Hero({name}) {
    if(name === "Joker"){
        throw new Error("Not a proper name")
    }
  return (
    <div>
      {name}
    </div>
  )
}

export default Hero
