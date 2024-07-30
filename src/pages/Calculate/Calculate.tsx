import React from 'react';
import styles from './Calculate.module.styl';
import { Text } from '@consta/uikit/Text';
import { TextField } from '@consta/uikit/TextField';
import { checkIsNumber } from 'src/utils/helpers/checkIsNumber';

const Calculate = () => {
  const [toKg, setToKg] = React.useState<string | null>(null);
  const [concentration, setConcentration] = React.useState<string | null>(null);
  const [weight, setWeight] = React.useState<string | null>(null);

  const checkIsAll = toKg && concentration && weight;

  const result =
    checkIsAll &&
    ((Number(toKg) / Number(concentration)) * Number(weight)).toFixed(2);

  return (
    <div className={styles.root}>
      <Text size="3xl">Калькулятор кол-ва раствора</Text>
      <TextField
        label="Доза на килограмм мг / кг"
        value={toKg}
        type="number"
        onChange={({ value }) => checkIsNumber(value) && setToKg(value)}
      />
      <TextField
        label="Концентрация вещества,  мг / мл"
        value={concentration}
        type="number"
        onChange={({ value }) =>
          checkIsNumber(value) && setConcentration(value)
        }
      />
      <TextField
        label="Вес животного, кг"
        value={weight}
        type="number"
        onChange={({ value }) => checkIsNumber(value) && setWeight(value)}
      />
      {result && <Text size="2xl">Результат: {result} мл</Text>}
    </div>
  );
};

export default Calculate;
