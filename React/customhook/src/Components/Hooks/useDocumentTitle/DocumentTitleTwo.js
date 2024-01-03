import React, { useState } from 'react'
import useDocumentTitle from './useDocumentTitle'

function DocumentTitleTwo() {
    const [count, setCount] = useState(0)
        
    useDocumentTitle(count)
  return (
    <div>
      <div>
         <button onClick={() => setCount(count + 1)}> Count - {count}</button>
      </div>
    </div>
  )
}

export default DocumentTitleTwo
