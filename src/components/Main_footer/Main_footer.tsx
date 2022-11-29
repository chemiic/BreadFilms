import React from 'react'
import styles  from './Main_footer.module.scss'


export default function Main_footer (){
    return(
        <footer className={styles.footer}>
            <a href='#' className={styles.footer__text}>Политика конфиденциальности</a>
        </footer>
    )
}