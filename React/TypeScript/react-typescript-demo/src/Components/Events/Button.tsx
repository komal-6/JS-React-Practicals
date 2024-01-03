import  React from 'react'

type Buttonprops = {
    handleClick: (event:React.MouseEvent<HTMLButtonElement>) => void
}
export const Button = (props: Buttonprops) => {
  return <button onClick={event => props.handleClick(event)}>Click</button>
}

