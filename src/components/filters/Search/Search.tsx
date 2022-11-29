import React, { FC } from 'react';

import styles from './Search.module.scss';

interface Props {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

const Search: FC<Props> = ({ search, setSearch }) => {
  return (
    <div className={styles.search}>
      <input
        type="text"
        className={styles.search_bar}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        placeholder="Назввание..."
      />
    </div>
  );
};

export default Search;
