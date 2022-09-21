import React, { useContext, useState } from 'react'

import { TodoListContext } from '../../index.jsx'

import styles from './index.css'

const Todo = (props) => {
  const [todo, setTodo] = useState(props.todo)

  const { dispatch } = useContext(TodoListContext)


  return (
    <div className={styles['wrapper']}>
      <div className={styles['left']}>
        <input
          type="text"
          className={styles['title']}
          value={todo.title}
          onChange={e => setTodo({ ...todo, title: e.target.value })}
          onBlur={() => {
            // TODO: even don't change value still re-render
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
          value={todo.id}
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