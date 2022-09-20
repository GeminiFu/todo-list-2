import React, { useState } from 'react'

import styles from './index.css'

import Form from '../Form'

const AddTask = () => {
    const [active, setActive] = useState(false)

    return (
        <div className={styles['wrapper']}>
            {(() => {
                if (active) {
                    return <Form setActive={setActive} />
                } else {
                    return <button
                        className={styles['add-button']}
                        onClick={() => { setActive(true) }}
                    >+ ADD</button>
                }
            })()}

        </div>
    )
}

export default AddTask