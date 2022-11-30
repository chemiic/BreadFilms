import React from 'react'
import styles  from './Main_header.module.scss'
import {NavLink} from "react-router-dom";


export default function Main_header(){
    return(
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <p className={styles.header__logoText}>BreadFilms</p>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navList__item}>
                        <NavLink to="/" className={styles.navList__itemLink}> Гланая </NavLink>
                    </li>
                    <li className={styles.navList__item}>
                        <NavLink to='/Katalog' className={styles.navList__itemLink}> Каталог </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
