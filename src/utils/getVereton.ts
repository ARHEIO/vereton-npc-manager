import { Container, Sprite } from "pixi.js";

export const getVereton = (stage: Container): Sprite | null =>
  stage.children[0].name == 'Vereton' && stage.children[0].isSprite
    ? stage.children[0] as Sprite
    : null;