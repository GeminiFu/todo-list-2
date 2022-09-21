import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom'

import useTodoList from './hooks/useTodoList'

import './basic.css'
import styles from './index.css'

import AddTask from './components/AddTask'
import TodoList from './components/TodoList/TodoList'

export const TodoListContext = createContext()

const App = () => {

    const {
        renderTodoList,
        dispatch,
        setFilter,
    } = useTodoList()

    return (
        <div className={styles['wrapper']}>
            <div className={styles['nav-wrapper']}></div>
            <TodoListContext.Provider value={{
                renderTodoList,
                dispatch,
                setFilter,
            }}>
                <AddTask />
                <TodoList />
            </TodoListContext.Provider>
        </div >
    )
}

ReactDOM.render(
    <App />
    , document.getElementById('root'))