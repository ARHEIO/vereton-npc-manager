import React, { useEffect, useState } from 'react';
import { Application, Sprite, Container, InteractionEvent } from 'pixi.js';
import { fool, magician } from './assets'
import { TarotSprite } from './domain/TarotSprite';


const injectApp = (view: HTMLCanvasElement) => {
  const element = document.getElementById('unique-placeholder-key');
  element?.parentNode?.replaceChild(view, element);
}

export const Map: React.VFC = () => {
  const [app] = useState<Application>(new Application({ width: 800, height: 600 }));

  const { view, stage } = app;

  const addSprite = (sprite: string) => {
    const newSprite = new TarotSprite(sprite);
    stage.addChild(newSprite.getSprite());
  }

  useEffect(() => {
    injectApp(view);
    addSprite(fool);
    addSprite(magician);
  })


  return app ? (
    <div>
      <div id='unique-placeholder-key'></div>
    </div>
  ) : <p>Loading</p>;
}
