import { InteractionEvent, Sprite } from "pixi.js";

export class TarotSprite {
  private dragging = false;
  private sprite: Sprite;

  readonly WIDTH = 80;
  readonly HEIGHT = 110;

  constructor(spriteImg: string) {
    this.sprite = Sprite.from(spriteImg);

    this.sprite.height = 110;
    this.sprite.width = 80;
    this.sprite.interactive = true;

    this.sprite
      .on('pointerdown', () => {
        this.dragging = true;
      })
      .on('mousemove', (event: InteractionEvent) =>{
        if (this.dragging) {
          const { x, y } = event.data.global;
          this.sprite.x = x - 40; // WIDTH / 2
          this.sprite.y = y - 55; // HEIGHT / 2
        }
      })
      .on('pointerup', () => {
        this.dragging = false;
      });
  }

  public getSprite(): Sprite {
    return this.sprite;
  }
}