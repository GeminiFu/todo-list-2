import React, { useReducer, useState } from 'react'

const useTodoList = () => {
    const [todoList, dispatch] = useReducer(reducer, [])

    function reducer(todoList, action) {
        switch (action.type) {
            case 'ADD':
                // action.payload is todo {title: string}
                const newTodo = action.payload
                newTodo.id = todoList.length
                return [
                    ...todoList,
                    newTodo
                ]
            default:
                throw 'reducer error'
        }
    }

    const [filter, setFilter] = useState('ALL')

    function filt(filter) {
        switch (filter) {
            case 'ALL':
                return todoList
                break
            default:
                throw 'filter error'
        }
    }

    const renderTodoList = filt(filter)

    return {
        renderTodoList,
        dispatch,
        setFilter,
    }
}

export default useTodoList