import React from 'react';
import styles from './Calculate.module.styl';
import { Text } from '@consta/uikit/Text';

const Calculate = () => {
  return (
    <div className={styles.root}>
      <Text size="2xl">Калькулятор</Text>
    </div>
  );
};

export default Calculate;
