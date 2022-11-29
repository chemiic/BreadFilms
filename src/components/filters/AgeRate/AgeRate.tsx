import React, { FC } from 'react';
import styles from './AgeRate.module.scss'

interface Props {
  ageRate: string;
  setAgeRate: React.Dispatch<React.SetStateAction<string>>;
}

const AgeRageSelect: FC<Props> = ({ ageRate, setAgeRate }) => {
  return (
    <div className={styles.select__age}>
        <p className="select__ageText">Возрастной ценз:</p>
      <select
        name="film"
        id="film-select"
        value={ageRate}
        onChange={(event) => {
          setAgeRate(event.target.value);
        }}
      >
        <option value=" "></option>
        <option value="0+">0+</option>
        <option value="14+">14+</option>
        <option value="16+">16+</option>
        <option value="18+">18+</option>
      </select>
    </div>
  );
};

export default AgeRageSelect;
