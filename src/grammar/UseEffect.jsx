import React, { useEffect, useRef, useState } from 'react'

const UseEffect = () => {
  const [count, setCount] = useState(0)
  const didMountRef = useRef(false)
  const [timer, setTimer] = useState(0)
  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    if (!didMountRef.current) {
      console.log('최초 마운트 됐을 때')
      didMountRef.current = true
      return
    } else {
      console.log('마운트 업데이트 때')
    }

    return () => {
      console.log('언마운트 업데이트 때')
    }
  })

  const hideTimer = () => {
    setIsShow(false)
    setTimer(0)
  }
  const showTimer = () => {
    setIsShow(true)
  }
  useEffect(() => {
    let interval

    if (isShow) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1)
      }, 1000)
    }

    return () => {
      console.log('타이머 정리')
      clearInterval(interval)
    }
  }, [isShow])

  return (
    <div>
      <strong>{count}</strong>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        counter + 1
      </button>
      <div>
        {isShow ? (
          <div>
            <strong>{timer}초</strong>
            <button onClick={hideTimer}>타이머 숨기기</button>
          </div>
        ) : (
          <button onClick={showTimer}>타이머 보이기</button>
        )}
      </div>
    </div>
  )
}

export default UseEffect
