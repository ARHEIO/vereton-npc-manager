import React from 'react';
import { DraggableSprite } from "../DraggableSprite";

type TarotSpriteProps = {
  imageUrl: string;
  tarotName: string;
};

export const TarotSprite: React.VFC<TarotSpriteProps> = ({
  imageUrl,
  tarotName
}) => (
  <DraggableSprite
    startingHeight={110}
    startingWidth={80}
    imageUrl={imageUrl}
    name={tarotName}
  />
);