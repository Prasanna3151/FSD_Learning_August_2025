import React from 'react'
import Grandchild from './Grandchild'

function Child(props) {
  return (
    <div>
        <h1>Child Component</h1> <hr />
        <Grandchild msg = {props.msg} />
    </div>
  )
}

export default Child