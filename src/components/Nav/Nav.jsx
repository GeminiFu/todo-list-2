import React from 'react'
import { Link } from 'react-router-dom'

import useButtons from '../../hooks/useButtons'

import styles from './index.css'

const Nav = () => {
    const navNames = ['My Tasks', 'In Progress', 'Completed']
    const url = ['/', 'inprogress', 'completed']
    const [whoActive, setWhoActive] = useButtons(navNames, 'My Tasks')


    return (
        <div className={styles['wrapper']}>
            {navNames.map((navName, index) => {
                return <Link
                    to={url[index]}
                    className={`
                        ${styles['nav']}
                        ${whoActive[index] ? styles['active'] : ''}
                    `}
                    onClick={() => {
                        setWhoActive(navName)
                    }} >
                    {navName}
                </Link>
            })}
        </div>
    )
}

export default Nav