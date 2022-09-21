import React, { useContext, useState } from 'react'

import { TodoListContext } from '../../index.jsx'

import styles from './index.css'

const Todo = (props) => {
  const todo = props.todo

  const { dispatch } = useContext(TodoListContext)

  return (
    <div className={styles['wrapper']}>
      <div className={styles['left']}>
        <input
          type="text"
          className={styles['title']}
          value={todo.title}
          onChange={e => {
            todo.title = e.target.value
            dispatch({
              type: 'UPDATE',
              payload: todo,
            })
          }}
        />
      </div>
      <div className={styles['right']}>
        <input
          type="checkbox"
          className='important'
          checked={todo.important}
          onChange={e => {
            todo.important = e.target.checked
            dispatch({
              type: 'UPDATE',
              payload: todo,
            })
          }}
        />
      </div>
    </div>
  )
}

export default Todo