import React from 'react'
import styles  from './Main_header.module.scss'


export default function main_header (){
    return(
        <header className={styles.header}>
            <div className={styles.header__logo}>
                <p className={styles.header__logoText}>BreadFilms</p>
            </div>
            <nav className={styles.nav}>
                <ul className={styles.navList}>
                    <li className={styles.navList__item}><a href="#" className={styles.navList__itemLink}>Главная</a></li>
                    <li className={styles.navList__item}><a href="#" className={styles.navList__itemLink}>Каталог</a></li>
                </ul>
            </nav>
        </header>
    )
}