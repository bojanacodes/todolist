import React, { useState } from 'react'
import Data from './Data.js'

const List = () => {

  

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
        <input className="input is-primary" type="text" placeholder="Add your task here" />
      </div>
    </div>
  </main>







}

export default List 