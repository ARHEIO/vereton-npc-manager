import { Application, DisplayObject } from "pixi.js";
import { CardSaveData, SaveData } from ".";
import { getVereton } from "./getVereton";

function reduceArrayToObjectOfKeys<T extends Record<string, string|number>>(keyName: keyof T) {
  return (output: Record<T[keyof T], T>, current: T) => {
    const key = current[keyName];
    output[key] = current;
    return output;
  }
}

const loadCardsFromString = (loadData: string): SaveData => {
  const { cards } = JSON.parse(atob(loadData));
  return {
    cards: cards.reduce(reduceArrayToObjectOfKeys<CardSaveData>('name'), {})
  }
}

export const setMapState = ({ stage }: Application, loadData: string) => {
  const vereton = getVereton(stage);
  if (vereton == null) {
    throw new Error('Could not find Vereton');
  }

  const data = loadCardsFromString(loadData);
  console.log('%c⧭', 'color: #8c0038', data);

  const { cards } = data;

  vereton?.children.forEach((child: DisplayObject) => {
    const dataKey = child.name;
    child.x = cards[dataKey as any].x;
    child.y = cards[dataKey as any].y;
  });
}