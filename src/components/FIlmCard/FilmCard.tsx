import React, {FC} from "react";
import {IFilmItem} from "../../assets/types/types";
import styles from './FilmCard.module.scss';
import {Link} from "react-router-dom";

// import { Link } from 'react-router-dom';
interface Props {
    item: IFilmItem;
}

const FilmCard: FC<Props> = ({ item }) =>  {
    return (

        <>
            <div className={styles.card}>
                <div className={styles.img__wrap}>
                    <Link to={`/Katalog/${item.id}`}>
                        <img className={styles.card__img} src={item.img} alt={item.title} />
                        <div className={styles.poster}>
                            <svg
                                className={styles.rating__star}
                                width="15"
                                height="15"
                                viewBox="0 0 15 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.4713 15L4.47223 8.98092L0 5.46228H5.64194L7.45777 0L9.15645 5.46228H15L10.275 9.05924L12.1225 15L7.37643 11.2659L2.4713 15Z"
                                    fill="#c4c4c4"
                                />
                            </svg>
                            <span className={styles.rating}>{item.rate.toFixed(1)}</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.card__desc}>
                    <h2 className={styles.card__title}>{item.title}</h2>
                </div>
            </div>
        </>
    );
};
export default FilmCard