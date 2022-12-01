import React, {FC, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {FilmData} from "../../assets/store/storeFilm";
import {IFilmItem} from "../../assets/types/types";

import styles from './Film_page.module.scss'


const Film_page: FC = () => {

    const [item, setItem] = useState<IFilmItem | null>(null);

    const url = useLocation();


    useEffect(() => {
        const Id = Number(url.pathname.slice(9))-1;
        const currentFilm = FilmData[Id];
        setItem(currentFilm);
    }, []);

    return(
        <>
            {item && (
            <main className='main'>
                <div className={styles.main__content}>
                    <div className={styles.img__wrap}>
                        <img src={item.img} alt="" className={styles.main__img}/>
                    </div>
                    <div className={styles.main__desc}>
                        <div className={styles.rating}>
                            <svg
                                className={styles.rating__star}
                                width="30"
                                height="30"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.4713 15L4.47223 8.98092L0 5.46228H5.64194L7.45777 0L9.15645 5.46228H15L10.275 9.05924L12.1225 15L7.37643 11.2659L2.4713 15Z"
                                    fill="#c4c4c4"
                                />
                            </svg>
                            <span className={styles.rating__text}>{item.rate.toFixed(1)}</span>
                        </div>
                        <h2 className={styles.desc__title}>{item.title}</h2>
                        <p className={styles.desc__year}>Год выпуска:  <span>{item.year}</span></p>
                        <p className={styles.desc__genre}>Жанр:  <span>{item.genre.join(', ').slice(1)}</span></p>
                        <p className={styles.desc__age}>Возрастной ценз:  <span>{item.age}</span></p>
                        <p className={styles.desc__text}>Описание: <span>{item.description}</span></p>
                    </div>
                </div>
                <div className={styles.trailerBlock}>
                    <p className={styles.trailerBlock__title}>Трейлер</p>
                    <iframe width="500" height="315" src={item.linkVideo}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen></iframe>
                </div>
            </main>
        )}
        </>
    )
}
export default Film_page