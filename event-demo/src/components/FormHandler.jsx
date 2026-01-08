'use client'

import React, { useState } from 'react'

function FormHandler() {
  const [name, setName] = useState('none')

  function handleChange(e) {
    setName(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(name)
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