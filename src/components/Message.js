import React from 'react'
import Something from './Something'
import 'materialize-css/dist/css/materialize.min.css'

const Message = (props) => {
  return (
    <div className="container">
      <Something people={props.people}/>
    </div>
  )
}

export default Message
