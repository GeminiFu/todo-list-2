import React from 'react'
import ReactDOM from 'react-dom'

import styles from './index.css'

import AddTask from './components/AddTask'

ReactDOM.render(
    <div className={styles['wrapper']}>
        <div className={styles['nav-wrapper']}></div>
        <AddTask />
    </div >
    , document.getElementById('root'))