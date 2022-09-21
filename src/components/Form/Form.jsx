import React, { useContext, useState } from 'react'

import { TodoListContext } from '../../index.jsx'

import styles from './index.css'

const Editor = (props) => {
    const initTodo = {
        title: '',
        important: false,
    }

    const [todo, setTodo] = useState(initTodo)

    const { dispatch } = useContext(TodoListContext)

    return (
        <div className={styles['wrapper']}>

            <div className={styles['header']}>
                <div className={styles['header-left']}>
                    <input
                        type="text"
                        className={styles['title']}
                        placeholder='Type Something Here'
                        onChange={e => {
                            setTodo({
                                ...todo, title: e.target.value
                            })
                        }}
                    />
                </div>
                <div className={styles['header-right']}>
                    <input
                        type="checkbox"
                        className='important'
                        onChange={e => { setTodo({ ...todo, important: e.target.checked }) }}
                    />
                </div>
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