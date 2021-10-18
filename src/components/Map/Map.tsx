import React, { useEffect, useState } from 'react';
import { Stage } from '@inlet/react-pixi';
import { Spinner } from 'precise-ui/dist/es6';
import fool from '../../assets/fool.jpeg';
import magician from '../../assets/magician.jpeg';
import { TarotSprite } from '../TarotSprite';
import { VeretonSprite } from '../VeretonSprite';
import { useWindowSize } from './hooks';
import { Application } from '@pixi/app';

const MapItems = () => (
  <VeretonSprite>
    <TarotSprite imageUrl={fool} tarotName='Fool' />
    <TarotSprite imageUrl={magician} tarotName='Magician' />
  </VeretonSprite>
)

export const Map: React.VFC = () => {

  const windowSize = useWindowSize();

  if (!windowSize) {
    return <Spinner />;
  }

  return (
    <main>
      <Stage
        width={windowSize.width - 4}
        height={windowSize.height - 105}
        options={{ backgroundColor: 0xababab }}
      >
        <MapItems />
      </Stage>
    </main>
  );
}
