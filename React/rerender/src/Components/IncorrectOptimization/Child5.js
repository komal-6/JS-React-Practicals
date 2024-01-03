import React from 'react'

export const Child5 = ({name}) => {
    console.log("Child5 render")
  return (
    <div>
      Hello {name}
    </div>
  )
}

export const MemoizedChild5 = React.memo(Child5)
