import React from 'react';
import fool from '../../assets/fool.jpeg';
import magician from '../../assets/magician.jpeg';
import { TarotSprite } from '../TarotSprite';
import { VeretonSprite } from '../VeretonSprite';

export const Map: React.VFC = () => (
  <VeretonSprite>
    <TarotSprite imageUrl={fool} tarotName='Fool' />
    <TarotSprite imageUrl={magician} tarotName='Magician' />
  </VeretonSprite>
);
