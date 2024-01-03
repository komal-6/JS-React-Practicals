import React,{useState} from 'react'

//Using Object
const initialState = {
    fname: 'Komal',
    lname: ' Panchal'
}
const ObjectUseState = () => {
    const [person, setPerson] = useState(initialState)
    const changeName = () =>{
        // person.fname = 'Piya'
        // person.lname = 'Panchal'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'Piya'
        newPerson.lname = ' Panchal'
        setPerson(newPerson)
    }

    console.log('ObjectUseState Render')
  return (
    <div>
      <button onClick={changeName}>{person.fname}{person.lname}</button>
    </div>
  )
}

export default ObjectUseState

