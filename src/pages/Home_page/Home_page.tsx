import Main_header from "../../components/Main_header/Main_header";
import Main_footer from "../../components/Main_footer/Main_footer";
import FilmCard from "../../components/FIlmCard/FilmCard";
import React, {FC} from "react";
import {FilmData} from "../../assets/store/storeFilm";
import styles from './Home_page.module.scss'
import {Link} from "react-router-dom";

const Home_page: FC = () => {
    return (
            <main className={styles.main}>
                <h1 className={styles.main__title}>Популярное</h1>
                <div className={styles.films}>
                    {FilmData.slice(0,5).map((item) => (
                        <FilmCard item={item} key={item.id} />
                    ))}
                </div>

                <Link to={'/Katalog'} className={styles.main__btn}>Смотреть еще</Link>

            </main>
    )
}
export default Home_page