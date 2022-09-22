import React, { useState } from 'react'

import styles from './index.css'

import Form from '../Form'

const AddTask = () => {
    // TODO: default false
    const [active, setActive] = useState(true)

    return (
        <div className={styles['wrapper']}>
            {(() => {
                if (active) {
                    return <Form setActive={setActive} />
                } else {
                    return <button
                        className={styles['add-button']}
                        onClick={() => { setActive(true) }}
                    >+ Add Task</button>
                }
            })()}

        </div>
    )
}

export default AddTask