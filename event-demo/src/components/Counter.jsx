import React, { useState } from 'react'

function Counter() {
  const [num, setNum] = useState(0)

  function increment() {
    setNum(num + 1)
  }

  return (
    <div>
      <h1>Counter: {num}</h1>
      <button onClick={increment}>INCREMENT</button>
    </div>
  )
}

export default Counter