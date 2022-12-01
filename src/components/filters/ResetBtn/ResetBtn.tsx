import React, { FC } from 'react';
import styles from './ResetBtn.module.scss'

interface Props {
  reset: () => void;
}

const ResetBtn: FC<Props> = ({ reset }) => {

  return (
      <button className={styles.reset} onClick={reset}>
        Сброс
      </button>
  );
};

export default ResetBtn;
