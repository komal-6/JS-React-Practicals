type PersonPorps = {
    name:{
        firstName: string
        lastName: string
    }
}
export const Person = (props: PersonPorps) => {
  return <div>{props.name.firstName} {props.name.lastName}</div>
  
}

