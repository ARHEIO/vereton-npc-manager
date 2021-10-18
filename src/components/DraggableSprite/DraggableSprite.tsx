import { Sprite } from '@inlet/react-pixi';
import React from 'react';
import { useDrag } from './hooks';

export type DraggableSpriteProps = {
  imageUrl: string;
  name: string;
  startingHeight: number;
  startingWidth: number;
  startingX?: number;
  startingY?: number;
}

export const DraggableSprite: React.FC<DraggableSpriteProps> = ({
  children,
  imageUrl,
  name,
  startingHeight,
  startingWidth,
  startingX = 0,
  startingY = 0,
}) => {
  const bind = useDrag({
    x: startingX,
    y: startingY,
  });

  return (
    <Sprite
      height={startingHeight}
      width={startingWidth}
      image={imageUrl}
      name={name}
      {...bind}
    >
      {children}
    </Sprite>
  )
};
