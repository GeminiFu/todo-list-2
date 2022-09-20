import React, { useContext, useState } from 'react'

import { TodoListContext } from '../../index.jsx'

import styles from './index.css'

const Todo = (props) => {
  const [todo, setTodo] = useState(props.todo)

  const { todoList, setTodoList } = useContext(TodoListContext)

  return (
    <div className={styles['wrapper']}>
      <input
        type="text"
        className={styles['title']}
        value={todo.title}
        onChange={e => setTodo({ ...todo, title: e.target.value })}
        onBlur={() => {
          const newTodoList = todoList.map((todoInList) => {
            if (todoInList.id === todo.id) {
              return todo
            } else {
              return todoInList
            }
          })

          setTodoList(newTodoList)
        }}
      />
    </div>
  )
}

export default Todo