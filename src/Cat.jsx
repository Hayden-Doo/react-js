import React from 'react'

const Cat = (props) => {
  const { name, age } = props
  return (
    <div>
      나의 고양이 이름은 {name}이고 나이는 {age}살입니다.
    </div>
  )
}

export default Cat
