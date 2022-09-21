import React, { useContext, useState } from 'react'

import { TodoListContext } from '../../index.jsx'

import styles from './index.css'

const Editor = (props) => {
    const [todo, setTodo] = useState({})

    const { dispatch } = useContext(TodoListContext)

    return (
        <div className={styles['wrapper']}>

            <div className={styles['header']}>
                <input
                    className={styles['title']}
                    type="text"
                    placeholder='Type Something Here'
                    onChange={e => {
                        setTodo({
                            ...todo, title: e.target.value
                        })
                    }}
                />
            </div>

            <div className={styles['footer']}>
                <button
                    className={styles['cancel']}
                    onClick={() => { props.setActive(false) }}
                >cancel</button>
                <button
                    className={styles['add-todo']}
                    onClick={() => {
                        dispatch({
                            type: 'ADD',
                            payload: todo,
                        })

                        props.setActive(false)
                    }}
                >add todo</button>
            </div>
        </div>
    )
}

export default Editor