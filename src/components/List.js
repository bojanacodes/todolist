import React, { useState } from 'react'
import { CSVLink } from 'react-csv'

export default function List() {

  const [userInput, updateUserInput] = useState('')
  const [toDoList, updateToDoList] = useState([])
  const [inputError, updateInputError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const tasksArr = []
    
    toDoList.forEach(item => {
      tasksArr.push(item.task)
    })

    if (tasksArr.includes(userInput)) {
      updateInputError('You cannot add a task more than once.')
      updateUserInput('')
    } else if (userInput.length > 0) {
      const todoListCopy = [...toDoList]
      todoListCopy.push({ task: `${userInput}`, status: 'outstanding' })
      updateToDoList(todoListCopy)
      updateUserInput('')
    } else if (userInput.length === 0) {
      updateInputError('Please write a task before hitting Submit')
    }
  }

  function handleInputChange(event) {
    updateUserInput(event.target.value)
  }

  function handleDeleteError() {
    updateInputError('')
  }

  function handleDeleteTask(event) {
    const newToDoList = []
    toDoList.forEach((item) => {
      if (toDoList.indexOf(item) !== parseInt(event.target.id)) {
        newToDoList.push(item)
      }
    })
    updateToDoList(newToDoList)
  }

  function handleCheckboxChange(event) {
    let itemToUpdateIndex = 0

    toDoList.forEach((item, index) => {
      if (item.task === event.target.value) {
        return itemToUpdateIndex = index
      }
    })

    const toDoListCopy = [...toDoList]
    if (toDoListCopy[itemToUpdateIndex].status === 'outstanding') {
      toDoListCopy[itemToUpdateIndex].status = 'completed'
      updateToDoList(toDoListCopy)
    } else {
      toDoListCopy[itemToUpdateIndex].status = 'outstanding'
      updateToDoList(toDoListCopy)
    }
  }

  const headers = [
    { label: 'Task', key: 'task' },
    { label: 'Status', key: 'status' }
  ]


  return <main className='is-centered'>
    <div className='columns is-centered is-half'>
      <div className='column block is-half'>
        <ul className='block'>
          {toDoList.length > 0 &&
            toDoList.map((item, index) => {
              return <li key={index}>
                <label className='checkbox block' >
                  <input type='checkbox' className='strikethrough' value={item.task} onChange={handleCheckboxChange} />
                  <span>{item.task}</span>
                  <button className='delete ml-2' id={index} onClick={handleDeleteTask}></button>
                </label>
              </li>
            })}
        </ul>
        {inputError && <div className='notification is-warning is-light'>
          <button className='delete' onClick={handleDeleteError}></button>
          {inputError}
        </div>}
        <input className='input is-primary block' type='text' value={userInput} onChange={handleInputChange} placeholder='Add your task here' />
        <button className='button is-primary block has-text-white' onClick={handleSubmit}>Submit</button>
        <CSVLink data={toDoList} headers={headers}><button className='button is-primary block has-text-white ml-3'>Download</button></CSVLink>

      </div>
    </div>
  </main>

}


