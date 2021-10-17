import { InteractionEvent, Sprite } from "pixi.js";

export class SpriteEntity {
  private dragging = false;
  private sprite: Sprite;

  private diffX = 0;
  private diffY = 0;

  constructor(name: string, spriteSource: string, width: number, height: number) {
    this.sprite = Sprite.from(spriteSource);
    this.sprite.width = width;
    this.sprite.height = height;

    this.sprite.interactive = true;

    this.sprite.name = name;

    const onDragStart = (event: InteractionEvent) => {
      const { data, target } = event;
      if (target.name === this.sprite.name) {
        this.diffX = data.global.x - target.x;
        this.diffY = data.global.y - target.y;
        this.dragging = true;
      }
    }

    const onDragMove = (event: InteractionEvent) => {
      if (this.dragging) {
        const { data } = event;
        this.sprite.x = (data.global.x - this.diffX);
        this.sprite.y = (data.global.y - this.diffY);
      }
    }

    const onDragStop = () => {
      this.dragging = false;
    }

    this.sprite
      .on('pointerdown', onDragStart)
      .on('mousemove', onDragMove)
      .on('pointerup', onDragStop);
  }

  public getSprite(): Sprite {
    return this.sprite;
  }
}