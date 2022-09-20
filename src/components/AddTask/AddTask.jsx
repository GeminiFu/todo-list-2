import React, { useState } from 'react'

import styles from './index.css'

const AddTask = () => {
    const [active, setActive] = useState(false)



    return (


        <div className={styles['wrapper']}>
            {(() => {
                if (active) {
                    <Editor setActive={setActive} />
                } else {
                    return <button className={styles['add-button']}>+ ADD</button>
                }
            })()}

        </div>
    )
}

export default AddTask