import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + 1 }
    case 'decrement':
      return { ...state, counter: state.counter - 1 }
    case 'reset':
      return { ...state, counter: 0 }
    default:
      return state
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {
    counter: 0,
    name: 'counter',
  })

  return (
    <div>
      <h2>
        {state.name}: {state.counter}{' '}
      </h2>
      <button onClick={() => dispatch({ type: 'increment' })}>+1</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-1</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
  )
}

export default UseReducer
