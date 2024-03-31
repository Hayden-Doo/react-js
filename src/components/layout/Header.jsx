import React from 'react'
import Nav from './Nav'

function Header(props) {
  const { title, nav } = props
  return (
    <header>
      <h1>{title}</h1>
      <Nav nav={nav} />
    </header>
  )
}

export default Header
