import React, { useContext } from 'react'

import { TodoListContext } from '../../index.jsx'

// import styles from './index.css'

import Todo from '../Todo'


const TodoList = () => {
  const { todoList } = useContext(TodoListContext)
  // TODO: filter

  return (
    todoList.map((todo) => <Todo todo={todo} />)
  )
}

export default TodoList