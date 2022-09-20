import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom'

import './basic.css'
import styles from './index.css'

import AddTask from './components/AddTask'
import TodoList from './components/TodoList/TodoList'

export const TodoListContext = createContext()

const App = () => {
    const [todoList, setTodoList] = useState([
        { title: 'some fake todo', id: 0 },
        { title: 'some fake todo', id: 1 },
        { title: 'some fake todo', id: 2 },
    ])

    return (
        <div className={styles['wrapper']}>
            <div className={styles['nav-wrapper']}></div>
            <TodoListContext.Provider value={{ todoList, setTodoList }}>
                <AddTask />
                <TodoList />
            </TodoListContext.Provider>
        </div >
    )
}

ReactDOM.render(
    <App />
    , document.getElementById('root'))