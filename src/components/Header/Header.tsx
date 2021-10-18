import React from 'react';
import { Application, Sprite } from 'pixi.js';
import styles from './Header.module.scss';
import { Button, Form, FormValuesData, TextField} from 'precise-ui';

type CardStateType = {
  name: string;
  x: number;
  y: number
}

export const Header: React.VFC = () => {


  const loadState = (data: FormValuesData) => {
  }

  const printState = () => {
  }

  return (
    <header className={styles.appHeader}>
      <Form onSubmit={e => loadState(e.data)}>
        <TextField name="load" autoComplete='off' />
        <Button>Load</Button>
        <Button onClick={printState} type='button' >Print State</Button>
      </Form>
    </header>
  );
}
