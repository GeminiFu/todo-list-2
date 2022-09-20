import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom'

import styles from './index.css'

import AddTask from './components/AddTask'
import useWatchState from './hooks/useWatchState'

export const TodoListContext = createContext()

const App = () => {
    const [todoList, setTodoList] = useState([])

    console.log('App/todoList is: ', todoList)

    return (
        <div className={styles['wrapper']}>
            <div className={styles['nav-wrapper']}></div>
            <TodoListContext.Provider value={{ todoList, setTodoList }}>
                <AddTask />

            </TodoListContext.Provider>
        </div >
    )
}

ReactDOM.render(
    <App />
    , document.getElementById('root'))