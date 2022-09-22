import React, { createContext, useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Routes } from 'react-router-dom'

import useTodoList from './hooks/useTodoList'

import './basic.css'
import styles from './index.css'

import Nav from './components/Nav'
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
        <HashRouter>
            <div className={styles['wrapper']}>
                <TodoListContext.Provider value={{
                    renderTodoList,
                    dispatch,
                    setFilter,
                }}>
                    <Nav />
                    <AddTask />
                    <Routes>
                        <Route path='/' element={
                            <TodoList filter='ALL' />
                        } />
                        <Route path='inprogress' element={

                            <TodoList filter='IN_PROGRESS' />

                        } />
                        <Route path='completed' element={
                            <TodoList filter='COMPLETED' />
                        } />
                    </Routes>
                </TodoListContext.Provider>
            </div>
        </HashRouter>
    )
}

ReactDOM.render(
    <App />
    , document.getElementById('root'))