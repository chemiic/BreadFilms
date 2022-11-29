import React, { FC } from 'react';
import styles from './SortSelect.module.scss'

interface Props {
  rate: string;
  setRate: React.Dispatch<React.SetStateAction<string>>;
}

const SortSelect: FC<Props> = ({ rate, setRate }) => {
  return (
    <div className={styles.sort}>
        <p className={styles.sort__text}>Сортировка:</p>
      <select
        name="film"
        id="film-select"
        value={rate}
        onChange={(event) => {
          setRate(event.target.value);
        }}
      >
        <option value="up">По возрастанию</option>
        <option value="down">По убыванию</option>
      </select>
    </div>
  );
};

export default SortSelect;
