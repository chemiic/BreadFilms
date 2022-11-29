// import Search from "../Search/Search";
// import {FilmData} from "../../assets/store/storeFilm";
// import {IFilmItem} from "../../assets/types/types";
// import {useEffect, useState} from "react";
// import GenreSelect from "../GenreSelect/GenreSelect";
// import AgeRageSelect from "../AgeRate/AgeRate";
// import SortSelect from "../SortSelect/SortSelect";
// import ResetBtn from "../ResetBtn/ResetBtn";
//
// const FilterBar = () =>{
//     // const [FilmList, setFilmList] = useState<IFilmItem[]>([]);
//     // const [search, setSearch] = useState<string>('');
//     // const [ageRate, setAgeRate] = useState<string>('');
//     // const [genre, setGenre] = useState<string>('');
//     // const [rate, setRate] = useState<string>('');
//     //
//     //
//     // useEffect(() => {
//     //     const result = FilmData.filter((item) => {
//     //         return (
//     //             item.title.toLowerCase().includes(search.toLowerCase()) &&
//     //             item.age.includes(ageRate) &&
//     //             item.genre.includes(genre)
//     //         );
//     //     });
//     //
//     //     if (rate === 'up') {
//     //         result.sort((a, b) => b.rate - a.rate);
//     //     } else if (rate === 'down') {
//     //         result.sort((a, b) => a.rate - b.rate);
//     //     }
//     //
//     //     setFilmList(result);
//     // }, [search, ageRate, genre, rate]);
//     //
//     // const ResetFilter = () => {
//     //     setSearch('');
//     //     setAgeRate('');
//     //     setGenre('');
//     //     setRate('');
//     // };
//
//     return (
//         // <aside className={'filter__bar'}>
//         //     <p className="filter__text">Фильтр</p>
//         //     <Search search={search} setSearch={setSearch} />
//         //     <SortSelect rate={rate} setRate={setRate} />
//         //     <GenreSelect genre={genre} setGenre={setGenre}/>
//         //     <AgeRageSelect ageRate={ageRate} setAgeRate={setAgeRate} />
//         //     <ResetBtn reset={ResetFilter} />
//         // </aside>
//     )
// }
// export default FilterBar