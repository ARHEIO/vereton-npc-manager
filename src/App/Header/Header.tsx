import React from 'react';
import { Application, Sprite } from 'pixi.js';
import styles from './Header.module.scss';
import { Button, Form, FormValuesData, TextField} from 'precise-ui';

type CardStateType = {
  name: string;
  x: number;
  y: number
}


export const Header: React.VFC<{app: Application}> = ({app}) => {

  const { stage } = app;

  const getVereton = () =>  stage.children[0] as Sprite;

  const loadState = (data: FormValuesData) => {
    try {
      const { load } = data;
      const cards: CardStateType[] = JSON.parse(atob(load));
      const mappedCards = cards.reduce((acc: any, curr: CardStateType) => {
        acc[curr.name] = curr;
        return acc;
      }, {})
      const children = getVereton().children;
      children.forEach((child) => {
        child.x = mappedCards[child.name].x;
        child.y = mappedCards[child.name].y;
      })
    } catch (error) {
      alert('That chunk is not valid');
    }
  }

  const printState = () => {
    const vereton = getVereton();

    const cards: CardStateType[] = vereton.children.map((child) => ({
      name: child.name,
      x: child.x,
      y: child.y,
    }));

    prompt("Copy to clipboard: ", btoa(JSON.stringify(cards)));
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
