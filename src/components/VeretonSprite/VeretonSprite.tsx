import React from 'react';
import { DraggableSprite } from "../DraggableSprite";
import vereton from '../../assets/vereton.jpeg';

export const VeretonSprite: React.FC = ({ children }) => (
  <DraggableSprite
    startingHeight={1875}
    startingWidth={1448}
    imageUrl={vereton}
    name='Vereton'
  >
    { children }
  </DraggableSprite>
);