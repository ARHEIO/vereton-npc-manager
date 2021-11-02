import { InteractionEvent, Sprite } from "pixi.js";
import { useCallback, useRef, useState } from "react";

export type Position = {
  x: number;
  y: number;
};

export const useDrag = (startPosition: Position) => {
  const sprite = useRef<Sprite>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState<Position>(startPosition);
  const [pointerDistanceToRoot, setPointerDistanceToRoot] = useState<Position>({x: 0, y: 0});

  const onDown = useCallback((event: InteractionEvent) => {
    event.stopPropagation();
    setIsDragging(true);

    const pointerDistanceToRoot = event.data.global;
    const targetPosition = event.target;
    setPointerDistanceToRoot({
      x: pointerDistanceToRoot.x - targetPosition.x,
      y: pointerDistanceToRoot.y - targetPosition.y,
    });
  }, []);

  const onMove = useCallback((event: InteractionEvent) => {
    if (isDragging && sprite.current) {
      const { x, y } = event.data.global;
      setPosition({
        x: x - pointerDistanceToRoot.x,
        y: y - pointerDistanceToRoot.y
      });
    }
  }, [isDragging, setPosition, pointerDistanceToRoot]);

  const onUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  return {
    ref: sprite,
    interactive: true,
    pointerdown: onDown,
    pointerup: onUp,
    pointerupoutside: onUp,
    pointermove: onMove,
    alpha: isDragging ? 0.7 : 1,
    anchor: 0.5,
    position,
  };
};
