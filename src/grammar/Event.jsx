import React, { useState } from 'react'

const Event = () => {
  const handleClick = (e) => {
    console.log(e) // 이벤트 객체 (MouseEvent)
  }

  const [text, setText] = useState('')
  const handleChange = (e) => {
    // document.querySelector('.text').innerText = event.target.value
    console.log(e.target.value)
    setText(e.target.value)
  }

  const handleMouseOver = (event) => {
    event.target.style.backgroundColor = 'black'
  }

  const [count, setCount] = useState(0)
  const handleCountState = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <h2>상태 변경</h2>
      <button onClick={handleCountState}>Click</button>
      <p>{count}</p>
      <br />
      <h1>조건부 렌더링 예제</h1>
      {count >= 5 ? (
        <p>count가 5 이상입니다!!!!</p>
      ) : (
        <p>count가 5 미만입니다.</p>
      )}

      <hr />
      <h2>Event !!!</h2>
      <h1>클릭 이벤트</h1>
      <button onClick={handleClick}>버튼</button>

      <h1>입력 이벤트</h1>
      <input type="text" onChange={handleChange} />
      <strong className="text">{text}</strong>

      <h1>마우스오버 이벤트</h1>
      <div className="change-red" onMouseOver={handleMouseOver}>
        마우스를 올려주세요.
      </div>
    </div>
  )
}

export default Event
