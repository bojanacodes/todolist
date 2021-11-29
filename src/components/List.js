import React, { useState } from 'react'
import Data from './Data.js'

const List = () => {

  const [userInput, updateUserInput] = useState('')
  const [todoList, updateToDoList] = useState(Data)

  function onSubmit(event) {
    event.preventDefault()
    updateToDoList(todoList.push(userInput))
    updateUserInput('')
  }

  function handleChange(event) {
    updateUserInput(event.target.value)
  }

  return <main>
    <div className="columns">
      <div className="column">
        <ul>
          {Data.map((item, index) => {
            return <li key={index} >
              <label className="checkbox">
                <input type="checkbox" />
                {item}
              </label>
            </li>
          })}

        </ul>
        <input className="input is-primary" type="text" value={userInput} onChange={handleChange} placeholder="Add your task here" />
        <button className="button is-primary is-outlined" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  </main>






}

export default List 