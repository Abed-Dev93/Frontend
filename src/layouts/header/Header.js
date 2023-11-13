import React from 'react'
import style from './Header.module.css'
import logo from '../../assets/logo.png'

const header = () => {
  return (
    <>
        <header className={style.header}>
            <img className={style.logo} src={logo} alt='logo' />
            <ul className={style.navigationList}>
                <li className={style.navigationListItem}>Homepage</li>
                <li className={style.navigationListItem}>Services</li>
                <li className={style.navigationListItem}>Portfolio</li>
                <li className={style.navigationListItem}>About us</li>
                <li className={style.navigationListItem}>Contact us</li>
            </ul>
        </header>
    </>
  )
}

export default header
