import React from 'react'

function Grandchild(props) {
  return (
    <div>
        <h1>GrandChild Component</h1> <hr />
        <p>Message from the app.jsx {props.msg}</p>
    </div>
  )
}

export default Grandchild