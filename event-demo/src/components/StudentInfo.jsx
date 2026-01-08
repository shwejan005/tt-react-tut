'use client'

import React, { useState } from 'react'

function StudentInfo() {
  const [nameInput, setNameInput] = useState('')
  const [htnoInput, setHtnoInput] = useState('')
  const [branchInput, setBranchInput] = useState('')

  const [name, setName] = useState('')
  const [htno, setHtno] = useState('')
  const [branch, setBranch] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setName(nameInput)
    setHtno(htnoInput)
    setBranch(branchInput)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setNameInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="HT No"
          onChange={(e) => setHtnoInput(e.target.value)}
        />
        <input
          type="text"
          placeholder="Branch"
          onChange={(e) => setBranchInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

      <h3>Name: {name}</h3>
      <h3>HT No: {htno}</h3>
      <h3>Branch: {branch}</h3>
    </div>
  )
}

export default StudentInfo