import { Application } from "@pixi/app"
import { DisplayObject } from "@pixi/display";
import { getVereton } from "./getVereton";

export type CardSaveData = {
  name: string;
  x: number;
  y: number;
}

export type SaveData = {
  cards: CardSaveData[]
};

const encodeSaveData = (data: SaveData) => btoa(JSON.stringify(data))

export const generateSaveData = ({ stage }: Application) => {
  const vereton = getVereton(stage);
  if (vereton == null) {
    throw new Error('Could not find Vereton');
  }

  const mapCardToCardSaveData = ({ name, x, y }: DisplayObject): CardSaveData => ({ name, x, y });

  const saveData: SaveData = {
    cards: vereton.children.map(mapCardToCardSaveData),
  };

  return encodeSaveData(saveData);
}
