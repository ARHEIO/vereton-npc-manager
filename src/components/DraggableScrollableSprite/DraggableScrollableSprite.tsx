import { Sprite, _ReactPixi } from '@inlet/react-pixi';
import { InteractionEvent } from '@pixi/interaction';
import React from 'react';
import { useDrag } from './hooks';

type WheelEvent = {
  wheel?: (event: InteractionEvent) => void
}

export type DraggableScrollableSpriteProps = {
  imageUrl: string;
  name: string;
  startingHeight: number;
  startingWidth: number;
  startingX?: number;
  startingY?: number;
} & WheelEvent & _ReactPixi.ISprite;

export const DraggableScrollableSprite: React.FC<DraggableScrollableSpriteProps> = ({
  children,
  imageUrl,
  name,
  startingHeight,
  startingWidth,
  startingX = 0,
  startingY = 0,
  ...props
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
      {...props}
    >
      {children}
    </Sprite>
  )
};
