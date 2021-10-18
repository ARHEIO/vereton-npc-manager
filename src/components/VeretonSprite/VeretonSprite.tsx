import React from 'react';
import vereton from '../../assets/vereton.jpeg';
import { DraggableScrollableSprite } from '../DraggableScrollableSprite';

export const VeretonSprite: React.FC = ({ children }) => {
  return (
    <DraggableScrollableSprite
      startingY={1875 / 2}
      startingX={1448 / 2}
      startingHeight={1875}
      startingWidth={1448}
      imageUrl={vereton}
      name='Vereton'
    >
      { children }
    </DraggableScrollableSprite>
  );
}