import React from 'react'

function Person({person,key}) {
  return (
    <div>
         <h2>{key}I am {person.name}. 
            My age is {person.age}. 
            My skill is {person.skill}
         </h2>
    </div>
  )
}

export default Person

