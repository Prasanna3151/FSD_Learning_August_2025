import React from 'react'
import './Header.css'

function Header(props) {
  return (
    <div>
        <h1 className='head'>{props.page}</h1>
    </div>
  )
}

export default Header