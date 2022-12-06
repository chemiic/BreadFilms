import  './Films_page.scss'
import FilmCard from "../../components/FIlmCard/FilmCard";
import React, {FC, useEffect, useState} from "react";
import {IFilmItem} from "../../assets/types/types";
import {FilmData} from "../../assets/store/storeFilm";
import Search from "../../components/filters/Search/Search";
import SortSelect from "../../components/filters/SortSelect/SortSelect";
import GenreSelect from "../../components/filters/GenreSelect/GenreSelect";
import AgeRageSelect from "../../components/filters/AgeRate/AgeRate";
import ResetBtn from "../../components/filters/ResetBtn/ResetBtn";
import MyModal from "../../components/MyModal/MyModal";

const Films_page: FC = () => {
    const [FilmList, setFilmList] = useState<IFilmItem[]>([]);
    const [search, setSearch] = useState<string>('');
    const [ageRate, setAgeRate] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false)

    const [year, setYear] = useState<number[]>([2000,2022]);

<<<<<<< HEAD
=======

>>>>>>> 1a750d02e4709b29c920598b17f6ff09d0dd4de5
    useEffect(() => {
        const result = FilmData.filter((item) => {
            return (
                item.title.toLowerCase().includes(search.toLowerCase().trim()) &&
                (item.year >= year[0] && item.year <= year[1]) &&
                item.age.includes(ageRate) &&
                item.genre.includes(genre)
            );
        });

        if (rate === 'up') {
            result.sort((a, b) => b.rate - a.rate);
        } else if (rate === 'down') {
            result.sort((a, b) => a.rate - b.rate);
        }

        setFilmList(result);
    }, [search, ageRate, genre, rate, year]);

    const ResetFilter = () => {
        setSearch('');
        setAgeRate('');
        setGenre('');
        setRate('');
        setYear([2000,2022])
    };


    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')
    const [age, setAge] = useState('')



    const addNewFilm = () => {
        event?.preventDefault()
        const newFilm: IFilmItem = {
            id: Date.now(),
            title,
            description,
            genre: [],
            rate: 10,
            age,
            year: 20022,
            img: 'https://media.tenor.com/9ckqI2zyVTkAAAAM/trollge-troll.gif',
            linkVideo: '',
        }
        setFilmList([...FilmData, newFilm])
        setModal(false)
        alert('Фильм успешно добавлен!')
    }


// @ts-ignore:
    return (
            <main className="main">
                <aside className={'filter__bar'}>
                    <p className="filter__text">Фильтр</p>
                    <Search search={search} setSearch={setSearch} />
<<<<<<< HEAD


=======
      
>>>>>>> 1a750d02e4709b29c920598b17f6ff09d0dd4de5

                    <SortSelect rate={rate} setRate={setRate} />
                    <GenreSelect genre={genre} setGenre={setGenre}/>
                    <AgeRageSelect ageRate={ageRate} setAgeRate={setAgeRate} />
                    <ResetBtn reset={ResetFilter} />
                    <button className={'addBtn'} onClick={()=> setModal(true) }>Добавить фильм</button>
                    <MyModal visible={modal} setVisible={setModal}>
                        <form className={'form'}>
                            <p className={'form__title'}>Добавить фильм</p>
                            <input type="text"
                                   className={'form__input'}
                                   placeholder={'Назавние'}
                                   value={title}
                                   onChange={event => setTitle(event.target.value)}
                            />
                            <input type="text"
                                   className={'form__input'}
                                   placeholder={'Описание'}
                                   value={description}
                                   onChange={event => setDescription(event.target.value)}
                            />

                            <input type="text"
                                   className={'form__input'}
                                   placeholder={'Год выпуска'}
                                   value={age}
                                   onChange={event => setAge(event.target.value)}
                            />

                            <button className={'form__btn'} onClick={addNewFilm}>Добавить</button>
                        </form>
                    </MyModal>
                </aside>


                <div className={'films'}>
                    {FilmList.length !== 0
                        ?
                        FilmList.map((item) => <FilmCard item={item} key={item.id} />)
                        :
                        <p className={'noCases'}>Ничего не найдено</p>
                    }
                </div>
            </main>
    )
}
<<<<<<< HEAD
export default Films_page
=======
>>>>>>> 1a750d02e4709b29c920598b17f6ff09d0dd4de5
