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

  return <main className="is-centered">
    <div className="columns is-centered is-half">
      <div className="column block is-half">
        <ul className="block">
          {Data.map((item, index) => {
            return <li key={index}>
              <label className="checkbox block" >
                <input type="checkbox" className="strikethrough"/>
                <span>{item}</span>
              </label>
            </li>
          })}

        </ul>
        <input className="input is-primary block" type="text" value={userInput} onChange={handleChange} placeholder="Add your task here" />
        <button className="button is-primary block has-text-white" onClick={onSubmit}>Submit</button>
      </div>
    </div>
  </main>






}

export default List 