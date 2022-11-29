import React, { FC } from 'react';
import styles from './GenreSelect.module.scss'
import SelectItem from "./SelectItem";
import {GenresStore} from "../../../assets/store/GenresStrore";
import FilmCard from "../../FIlmCard/FilmCard";

interface Props {
  genre: string;
  setGenre: React.Dispatch<React.SetStateAction<string>>;
}

const GenreSelect: FC<Props> = ({ genre, setGenre }) => {
  return (
    <div className={styles.genre__select}>
        <p className={'genre__selectText'}>Жанр</p>
      <select
        name="film"
        id="film-select"
        value={genre}
        onChange={(event) => {
          setGenre(event.target.value);
        }}
      >

        <option value="">Жанр</option>
          {GenresStore.map((item) => (
              <SelectItem value={item.value} key={item.id}/>
          ))}
      </select>
    </div>
  );
};

export default GenreSelect;
