'use client'

import { useState } from 'react';
import { addEmployee } from '../services/EmpService';

function AddEmp() {

  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [des, setDes] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const employee = {
      name,
      salary,
      des
    };
    
    try {
      const response = await addEmployee(employee);
      console.log("Employee added successfully:", response.data);
      setName("");
      setSalary("");
      setDes("");
    } catch (error) {
      console.error("Failed to add employee:", error);
    }
  };

  return (
    <div>
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Salary" name="salary" value={salary} onChange={(e) => setSalary(e.target.value)} />
        <input type="text" placeholder="Designation" name="designation" value={des} onChange={(e) => setDes(e.target.value)} />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  )
}

export default AddEmp