import React, { useContext } from 'react'

import { TodoListContext } from '../../index.jsx'

// import styles from './index.css'

import Todo from '../Todo'


const TodoList = (props) => {
  const { renderTodoList, setFilter } = useContext(TodoListContext)

  setFilter(props.filter)

  return (
    renderTodoList.map((todo) => {
      return <Todo todo={todo} />
    })
  )
}

export default TodoList