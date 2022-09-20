import React, { useState } from 'react'

const Editor = () => {
    const [task, setTask] = useState('')
    return (
        <div>
            <div className={styles['form-header']}>
                <input type="text" placeholder='Type Something Here' onChange={e => { setTask(e.target.value) }} />
            </div>
            <div className={styles['form-footer']}></div>
        </div>
    )
}

export default Editor