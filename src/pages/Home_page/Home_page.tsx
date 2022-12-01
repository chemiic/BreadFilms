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
                <div className={styles.about}>
                    <h2 className={styles.about__title}>О нас</h2>
                    <p className={styles.about__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis cumque dolorem impedit itaque nam nulla quidem vel voluptate voluptatibus. Adipisci blanditiis ea earum esse maiores quidem, repellendus sed tempora!</p>
                    <p className={styles.about__text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam assumenda autem dicta doloremque impedit, in nulla repellat sint? Accusantium amet facilis fuga inventore nesciunt possimus provident recusandae sit, suscipit voluptates. A accusamus adipisci architecto cum doloremque dolores est eum exercitationem, fugiat ipsa iste laboriosam minus molestias neque nobis, omnis optio perferendis quaerat qui sapiente tempore temporibus voluptas? Assumenda consectetur cum, cupiditate enim est id inventore laborum, molestias mollitia neque nisi non omnis optio possimus quas sunt tempora ut vero voluptatem voluptatibus? Ad adipisci architecto, debitis error facere ipsum, laboriosam maiores necessitatibus odio optio placeat, repellendus sequi soluta. Et, illum, perspiciatis!
                    </p>
                    <p className={styles.about__text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis cumque dolorem impedit itaque nam nulla quidem vel voluptate voluptatibus. Adipisci blanditiis ea earum esse maiores quidem, repellendus sed tempora!</p>
                </div>
                 </main>
    )
}
export default Home_page