import React from 'react'
import styles  from './Main_header.module.scss'
import {Link, NavLink} from "react-router-dom";


export default function Main_header(){
    return(
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <Link to={'/'} className={styles.header__logoText}>
                    BreadFilms
                </Link>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navList__item}>
                        <NavLink to={'/'} className={styles.navList__itemLink}> Гланая </NavLink>
                    </li>
                    <li className={styles.navList__item}>
                        <NavLink to={'/Katalog'} className={styles.navList__itemLink}> Каталог </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
