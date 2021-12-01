import React, { useState } from 'react'
import Data from './Data.js'
import { CSVLink } from "react-csv"

const List = () => {

  const [userInput, updateUserInput] = useState('')
  const [toDoList, updateToDoList] = useState([])

  function handleSubmit(event) {
    event.preventDefault()
    const todoListCopy = [...toDoList]
    todoListCopy.push({ 'task': `${userInput}`, 'status': 'outstanding'  })
    updateToDoList(todoListCopy)
    updateUserInput('')
  }

  function handleChange(event) {
    updateUserInput(event.target.value)
  }

  function handleCheckboxChange(event) {
    let itemToUpdateIndex = 0
    
    toDoList.forEach((item, index) => {
      if (item.task === event.target.value) {
        return itemToUpdateIndex = index
      }
    })
  
    const toDoListCopy = [...toDoList]
    toDoListCopy[itemToUpdateIndex].status = 'completed'
    updateToDoList(toDoListCopy)
  }

  const headers = [
    {label: "Task", key: "task"},
    {label: "Status", key: "status"}
  ]




  return <main className="is-centered">
    <div className="columns is-centered is-half">
      <div className="column block is-half">
        <ul className="block">
          {console.log('todolist in jsx', toDoList)}
          {toDoList.length > 0 && 
          toDoList.map((item, index) => {
            return <li key={index}>
              <label className="checkbox block" >
                <input type="checkbox" className="strikethrough" value= {item.task} onChange= {handleCheckboxChange}/>
                <span>{item.task}</span>
              </label>
            </li>
          })}
        </ul>

        <input className="input is-primary block" type="text" value={userInput} onChange={handleChange} placeholder="Add your task here" />
        <button className="button is-primary block has-text-white" onClick={handleSubmit}>Submit</button>
        <CSVLink data={toDoList} headers={headers}><button className="button is-primary block has-text-white">Download</button></CSVLink>

      </div>
    </div>
  </main>

}

export default List 