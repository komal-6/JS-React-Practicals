import React,{ useContext } from 'react'
import { CountContext } from './ContextParent'

export const ChildA = () => {
    console.log('ChildA Render')
  return (
    <>
      <div>ChildA</div>
      <ChildB />
    </>
  )
}

export const MemoizedChildA = React.memo(ChildA)

export const ChildB = () => {
    console.log('ChildB Render')
    return (
    <>
      <div>ChildB </div>
      <ChildC />
    </>
    )
  }

  export const ChildC = () => {
    const count = useContext(CountContext)
    console.log('ChildC Render')
    return (
    <>
      <div>ChildC count: {count}</div>
      </>
    )
  }

