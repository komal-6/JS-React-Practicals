import React, {useState} from 'react'

//Using Array 
const initState = ['Komal','Panchal']
const ArrayUseState = () => {
    const [persons, setPersons] = useState(initState)

    const handleClick = () =>{
        // persons.push('Piya')
        // persons.push('Panchal')
        // setPersons(persons)

        const newPerson = {...persons}
        newPerson.push = 'Piya'
        newPerson.push = 'Panchal'
        setPersons(newPerson)
    }
    console.log('ArrayState Render')
  return (
    <div>
       <button onClick={handleClick}>Click</button>
       {
            persons.map(person => {
            <div key={person}>{person}</div>
        })
       }
    </div>
  )
}

export default ArrayUseState
