import React from 'react'
import Person from './Person'

function List_Rendering() {
    //For index as key Anti-pattern
    const names = ['Komal','Piya','Kavya','Komal']
    const persons = [
        {
                id: 1,
                name: 'Komal',
                age: 21,
                skill: 'Java'
        },
        {
            id: 2,
            name: 'Piya',
            age: 22,
            skill: 'React'
        },
        {
            id: 1,
            name: 'Kavya',
            age: 23,
            skill: 'PHP'
        }
    ]
    //const names = ['Komal','Piya','Kavya']
    // const nameList = names.map(name =><h2>{name}</h2>)
    // const personList = persons.map(person => <h2>I am {person.name}. I am {person.age} years old. My skill is {person.age}</h2>)
    // const personList = persons.map(person =>(<Person person={person}></Person>))

    //Solving the console warning: Each child in a list should have a unique "key" prop.
    // const personList = persons.map(person =>(<Person key={person.name} person={person}></Person>))
    // return <div>{personList}</div>

     //For index as key Anti-pattern
     const nameList = names.map((name, index) =><h2 key={index}>{index} {name}</h2>)
     return <div>{nameList}</div>

//   return (
//     <div>
//           {/* <h2>{names[0]}</h2>
//         <h2>{names[1]}</h2>
//         <h2>{names[2]}</h2> */}

//           {/* {
                    // names.map(name =><h2>{name}</h2>)
//                  nameList
//           } */}
//     </div>
//   )
}

export default List_Rendering
