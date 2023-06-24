import React from 'react'

function Alert(props) {
  return (
        props.alert && <div class="alert alert-success" role="alert">
         <strong>{props.alert.typeof}</strong> : {props.alert.msg}
        </div>
  ) 
}

export default Alert
