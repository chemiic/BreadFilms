import  './Films_page.scss'
import FilmCard from "../../components/FIlmCard/FilmCard";
import React, {useEffect, useState} from "react";
import {IFilmItem} from "../../assets/types/types";
import {FilmData} from "../../assets/store/storeFilm";
import Search from "../../components/filters/Search/Search";
import SortSelect from "../../components/filters/SortSelect/SortSelect";
import GenreSelect from "../../components/filters/GenreSelect/GenreSelect";
import AgeRageSelect from "../../components/filters/AgeRate/AgeRate";
import ResetBtn from "../../components/filters/ResetBtn/ResetBtn";
import MyModal from "../../components/MyModal/MyModal";


export default function Films_page() {
    const [FilmList, setFilmList] = useState<IFilmItem[]>([]);
    const [search, setSearch] = useState<string>('');
    const [ageRate, setAgeRate] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [rate, setRate] = useState<string>('');
    const [modal, setModal] = useState<boolean>(false)

<<<<<<< HEAD

    const marks = [
        {
            value: 2000,
            label: '2000',
        },
        {
            value: 2007,
            label: '2007',
        },
        {
            value: 2016,
            label: '2010',
        },
        {
            value: 2022,
            label: '2022',
        },
    ];
=======
    const [year, setYear] = useState<number[]>([2000,2022]);
>>>>>>> fabbbfd91fe04976ca38a494ab3ec3cc816f6f78

    useEffect(() => {
        const result = FilmData.filter((item) => {
            return (
                item.title.toLowerCase().includes(search.toLowerCase().trim()) &&
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
    }, [search, ageRate, genre, rate]);

    const ResetFilter = () => {
        setSearch('');
        setAgeRate('');
        setGenre('');
        setRate('');
    };


    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('')
    const [age, setAge] = useState('')


    return (
            <main className="main">
                <aside className={'filter__bar'}>
                    <p className="filter__text">Фильтр</p>
                    <Search search={search} setSearch={setSearch} />
<<<<<<< HEAD
                    {/*<YearSelect />*/}
=======

>>>>>>> fabbbfd91fe04976ca38a494ab3ec3cc816f6f78
                    <SortSelect rate={rate} setRate={setRate} />
                    <GenreSelect genre={genre} setGenre={setGenre}/>
                    <AgeRageSelect ageRate={ageRate} setAgeRate={setAgeRate} />
                    <ResetBtn reset={ResetFilter} />
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
<<<<<<< HEAD
}
=======
}

export default Films_page

>>>>>>> fabbbfd91fe04976ca38a494ab3ec3cc816f6f78
