import React from 'react'

const Nav = ({ nav }) => {
  // const { nav } = props
  return (
    <nav>
      <ul>
        {/* 
        <li>
          <a href="#">{props.nav[0].title}</a>
        </li>
        <li>
          <a href="#">{props.nav[1].title}</a>
        </li>
        <li>
          <a href="#">{props.nav[2].title}</a>
        </li> 
        */}
        {nav.map((item) => (
          <li key={item.id}>
            <a href={`/${item.title}`}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Nav
