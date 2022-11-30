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
import Slider from '@material-ui/core/Slider';

export default function Films_page() {
    const [FilmList, setFilmList] = useState<IFilmItem[]>([]);
    const [search, setSearch] = useState<string>('');
    const [ageRate, setAgeRate] = useState<string>('');
    const [genre, setGenre] = useState<string>('');
    const [rate, setRate] = useState<string>('');


    const [year, setYear] = useState<number[]>([2000,2022]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setYear(newValue as number[]);
        console.log()
    };

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

    return (
            <main className="main">
                <aside className={'filter__bar'}>
                    <p className="filter__text">Фильтр</p>
                    <Search search={search} setSearch={setSearch} />
                    {/*<YearSelect />*/}

                    <div className="price-range-slider" >
                        <Slider
                            getAriaLabel={() => 'Temperature range'}
                            value={year}
                            min={2000}
                            max={2022}
                            color='secondary'
                            marks={marks}
                            onChange={handleChange}
                            valueLabelDisplay="on"
                        />
                    </div>

                    <SortSelect rate={rate} setRate={setRate} />
                    <GenreSelect genre={genre} setGenre={setGenre}/>
                    <AgeRageSelect ageRate={ageRate} setAgeRate={setAgeRate} />
                    <ResetBtn reset={ResetFilter} />
                </aside>


                <div className={'films'}>
                    {FilmList.map((item) => (
                    <FilmCard item={item} key={item.id} />
                    ))}
                </div>
            </main>
    )
}