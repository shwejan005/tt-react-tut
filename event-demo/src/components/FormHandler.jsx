'use client'

import React, { useState } from 'react'

function FormHandler() {
  const [input, setInput] = useState('')
  const [name, setName] = useState('none')

  function handleChange(e) {
    setInput(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setName(input)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
        <h1>Name : {name}</h1>
      </form>
    </div>
  )
}

export default FormHandler
