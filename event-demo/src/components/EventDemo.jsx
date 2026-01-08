import React from 'react'

function EventDemo() {
  function display () {
    alert('Hello World');
  }
  return (
    <div>
      <button onClick={display}> CLICK ME</button>
    </div>
  )
}

export default EventDemo