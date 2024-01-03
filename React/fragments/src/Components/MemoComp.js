import React from 'react'

function MemoComp({name}) {
    console.log('Rendering Memo Component')
  return (
    <div>
      {name}
    </div>
  )
}

export default React.memo(MemoComp)  //Memo introduced in version React 16.6, Check into the package.json if it's lower version please correct it.
