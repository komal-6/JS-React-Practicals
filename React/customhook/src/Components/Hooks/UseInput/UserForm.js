import React,{useState} from 'react'
import useInput from './useInput'

function UserForm() {
    // const [firstName, setFirstName] = useState('')
    // const [lastName, setLastName] = useState('')

    const [firstName,bindFirstName, resetFirstName] = useInput('')
    const [lastName,bindLastName, resetLastName] = useInput('')

    const submitHandler = e =>{
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
            <label>FirstName</label>
            {/* <input type='text' value={firstName} onChange={e => setFirstName(e.target.value)}/> */}
            <input {...bindFirstName} type='text'/>
        </div>
        <div>
            <label>LastName</label>
            {/* <input type='text' value={lastName} onChange={e => setLastName(e.target.value)}/> */}
            <input {...bindLastName} type='text'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UserForm
