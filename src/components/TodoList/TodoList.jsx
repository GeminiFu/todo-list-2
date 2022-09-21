import React, { useContext } from 'react'

import { TodoListContext } from '../../index.jsx'

// import styles from './index.css'

import Todo from '../Todo'


const TodoList = () => {
  const { renderTodoList } = useContext(TodoListContext)

  // TODO: filter

  return (
    renderTodoList.map((todo) => <Todo todo={todo} />)
  )
}

export default TodoList