import React from 'react';
import { Application, Container, DisplayObject, Sprite } from 'pixi.js';
import styles from './Header.module.scss';
import { Button, Form, FormValuesData, Skeleton, TextField} from 'precise-ui';

type CardStateType = {
  name: string;
  x: number;
  y: number
}

const getVeretonFromStage = (stage: Container): Sprite | null => {
  const firstChild = stage.children[0];
  return firstChild.name === 'Vereton'
    ? firstChild as Sprite
    : null;
};

const mapDisplayObjectToSaveState = ({ name, x, y }: DisplayObject): CardStateType => ({ name, x, y });

function reduceArrayToObjectOfKeys<T extends Record<string, string|number>>(keyName: keyof T) {
  return (output: Record<T[keyof T], T>, current: T) => {
    const key = current[keyName];
    output[key] = current;
    return output;
  }
}

const loadCardsFromString = (loadData: string): {[key: string]: CardStateType} => {
  const cards: CardStateType[] = JSON.parse(atob(loadData));
  return cards.reduce(reduceArrayToObjectOfKeys<CardStateType>('name'), {})
}


export const Header: React.VFC<{app?: Application}> = ({app}) => {

  if (!app) {
    return <Skeleton/>
  }
  const { stage } = app;

  const loadState = ({ load }: FormValuesData) => {
    try {
      const cards = loadCardsFromString(load);
      const vereton = getVeretonFromStage(stage);
      vereton?.children.forEach((child: DisplayObject) => {
        const dataKey = child.name;
        child.x = cards[dataKey].x;
        child.y = cards[dataKey].y;
      })
    } catch (error) {
      alert('That chunk is not valid');
    }
  }

  const printState = () => {
    const vereton = getVeretonFromStage(stage);
    if (!vereton) {
      throw new Error('Something is wrong');
    }

    const cards: CardStateType[] = vereton.children.map(mapDisplayObjectToSaveState);

    prompt("Copy to clipboard: ", btoa(JSON.stringify(cards)));
  }

  return (
    <header className={styles.appHeader}>
      <Form<{load: string}> onSubmit={e => loadState(e.data)}>
        <TextField style={{height: 54}} name="load" autoComplete='off' />
        <Button style={{height: 54}}>Load</Button>
        <Button style={{height: 54}} onClick={printState} type='button' >Print State</Button>
      </Form>
    </header>
  );
}
