import React from 'react'
import './MyStyle.css'

//By using CSS styling
function Stylesheet(props) {
    let className = props.primary ? 'primary':''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheets</h1>
    </div>
  )
}

export default Stylesheet
