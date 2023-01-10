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

export default function Films_page() {
    const [FilmList, setFilmList] = useState<IFilmItem[]>([]);
    const [search, setSearch] = useState<string>('');
    const [ageRate, setAgeRate] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [rate, setRate] = useState<string>('');


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

    return (
            <main className="main">
                <aside className={'filter__bar'}>
                    <p className="filter__text">Фильтр</p>
                    <Search search={search} setSearch={setSearch} />
                    <SortSelect rate={rate} setRate={setRate} />
                    <GenreSelect genre={genre} setGenre={setGenre}/>
                    <AgeRageSelect ageRate={ageRate} setAgeRate={setAgeRate} />
                    <ResetBtn reset={ResetFilter} />
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

