import React, { useReducer, useState } from 'react'

const useTodoList = () => {
    const initTodoList = [
        { completed: false, title: 'fake todo 1', important: false, id: 0 },
        { completed: false, title: 'fake todo 2', important: false, id: 1 },
        { completed: false, title: 'fake todo 3', important: false, id: 2 },
    ]

    const [todoList, dispatch] = useReducer(reducer, initTodoList)

    console.log('useTodoList todoList is: ', todoList)

    function reducer(todoList, action) {
        switch (action.type) {
            case 'ADD':
                // action.payload is todo but less id
                const newTodo = action.payload
                newTodo.id = todoList.length
                return [
                    ...todoList,
                    newTodo
                ]
            case 'UPDATE':
                // action.payload is todo
                const newTodoList = todoList.map(todo => {
                    if (todo.id === action.payload.id) {
                        return action.payload
                    } else {
                        return todo
                    }
                })
                return newTodoList
            default:
                throw 'reducer error'
        }
    }

    const [filter, setFilter] = useState('ALL')

    function filt(filter) {
        const newTodoList = []

        switch (filter) {
            case 'ALL':
                return todoList
            case 'IN_PROGRESS':
                todoList.forEach(todo => {
                    if (!todo.completed) {
                        newTodoList.push(todo)
                    }
                })
                return newTodoList
            case 'COMPLETED':
                todoList.forEach(todo => {
                    if (todo.completed) {
                        newTodoList.push(todo)
                    }
                })
                return newTodoList
            default:
                throw 'filter error'
        }
    }

    function importantSort(todoList) {
        const unimportant = []
        const important = []


        todoList.forEach(todo => {
            if (todo.important) {
                important.push(todo)
            } else {
                unimportant.push(todo)
            }
        })

        return [...important, ...unimportant]
    }

    const renderTodoList = importantSort(filt(filter))

    console.log('useTodoList renderTodoList is: ', renderTodoList)

    return {
        renderTodoList,
        dispatch,
        setFilter,
    }
}

export default useTodoList