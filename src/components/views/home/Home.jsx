import React from 'react'
import Comments from '../../comments/Comments'

const Home = (props) => {
  const { title, desc } = props
  return (
    <main>
      <h2>{title}</h2>
      <p>{desc} context</p>
      <Comments />
    </main>
  )
}

export default Home
