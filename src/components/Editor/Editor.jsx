import React, { useContext, useState } from 'react'

import { TodoListContext } from '../../index.jsx'

import styles from './index.css'



const Editor = (props) => {
    const [todo, setTodo] = useState('')

    const { todoList, setTodoList } = useContext(TodoListContext)

    return (
        <div className={styles['wrapper']}>
            <div className={styles['header']}>
                <input type="text" placeholder='Type Something Here' onChange={e => { setTodo(e.target.value) }} />
            </div>
            <div className={styles['footer']}>
                <button
                    className={styles['cancel']}
                    onClick={() => { props.setActive(false) }}
                >cancel</button>
                <button
                    className={styles['add-todo']}
                    onClick={() => {
                        props.setActive(false)
                        setTodoList([
                            ...todoList,
                            { title: todo, id: todoList.length }
                        ])
                    }}
                >add todo</button>
            </div>
        </div>
    )
}

export default Editor