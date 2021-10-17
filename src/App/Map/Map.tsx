import React, { useEffect } from 'react';
import { Application } from 'pixi.js';
import { fool, magician } from './assets/Tarot'
import { vereton } from './assets/Vereton';
import { SpriteEntity } from './domain/SpriteEntity';

const createVeretonSprite = () => {
  const veretonSprite = new SpriteEntity('vereton', vereton, 1448, 1875);
  return veretonSprite.getSprite();
}

const createTarotSprite = (spriteName: string, sprite: string) => {
  const tarotSprite = new SpriteEntity(spriteName, sprite, 80, 110);
  return tarotSprite.getSprite();
}

export const Map: React.VFC<{app: Application}> = ({app}) => {

  const { view, stage } = app;

  useEffect(() => {
    const element = document.getElementById('unique-placeholder-key');
    element?.parentNode?.replaceChild(view, element);

    const veretonSprite = createVeretonSprite();

    veretonSprite.addChild(
      createTarotSprite('fool', fool),
      createTarotSprite('magician', magician),
    );

    stage.addChild(veretonSprite);
  });

  return (
    <section>
      <div id='unique-placeholder-key'></div>
    </section>
  );
}
