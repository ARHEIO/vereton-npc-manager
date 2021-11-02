import { Sprite, _ReactPixi } from '@inlet/react-pixi';
import React from 'react';
import { useDrag } from './hooks';

import fool       from          './Icons/00.svg';
import magician   from          './Icons/01.svg';
import priestess  from          './Icons/02.svg';
import empress    from          './Icons/03.svg';
import emperor    from          './Icons/04.svg';
import hierophant from          './Icons/05.svg';
import lovers     from          './Icons/06.svg';
import chariot    from          './Icons/07.svg';
import strength   from          './Icons/08.svg';
import hermit     from          './Icons/09.svg';
import wheel      from          './Icons/10.svg';
import justice    from          './Icons/11.svg';
import hangedman  from          './Icons/12.svg';
import death      from          './Icons/13.svg';
import temperance from          './Icons/14.svg';
import devil      from          './Icons/15.svg';
import tower      from          './Icons/16.svg';
import star       from          './Icons/17.svg';
import moon       from          './Icons/18.svg';
import sun        from          './Icons/19.svg';
import judgement  from          './Icons/20.svg';
import world      from          './Icons/21.svg';

type TarotSpriteProps = {
  id: number;
  name: string;
  svg: string;
} & _ReactPixi.ISprite

const TarotSprite: React.VFC<TarotSpriteProps> = ({ id, name, svg, ...props }) => {
  const HEIGHT = 160;
  const WIDTH = 131;
  const SCALE = 0.4;

  const bind = useDrag({
    x: 0,
    y: 0,
  });

  return (
    <Sprite
      key={id}
      height={HEIGHT * SCALE}
      width={WIDTH * SCALE}
      image={svg}
      name={name}
      {...bind}
      {...props}
    />
  )
}

export const TheFool: React.VFC = () => <TarotSprite id={0} name={'The Fool'} svg={fool} />;
export const TheMagician: React.VFC = () => <TarotSprite id={1} name={'The Magician'} svg={magician} />;
export const ThePriestess: React.VFC = () => <TarotSprite id={2} name={'The Priestess'} svg={priestess} />;
export const TheEmpress: React.VFC = () => <TarotSprite id={3} name={'The Empress'} svg={empress} />;
export const TheEmperor: React.VFC = () => <TarotSprite id={4} name={'The Emperor'} svg={emperor} />;
export const TheHierophant: React.VFC = () => <TarotSprite id={5} name={'The Hierophant'} svg={hierophant} />;
export const TheLovers: React.VFC = () => <TarotSprite id={6} name={'The Lovers'} svg={lovers} />;
export const TheChariot: React.VFC = () => <TarotSprite id={7} name={'The Chariot'} svg={chariot} />;
export const Strength: React.VFC = () => <TarotSprite id={8} name={'Strength'} svg={strength} />;
export const TheHermit: React.VFC = () => <TarotSprite id={9} name={'The Hermit'} svg={hermit} />;
export const TheWheel: React.VFC = () => <TarotSprite id={10} name={'The Wheel'} svg={wheel} />;
export const Justice: React.VFC = () => <TarotSprite id={11} name={'Justice'} svg={justice} />;
export const TheHangedMan: React.VFC = () => <TarotSprite id={12} name={'The HangedMan'} svg={hangedman} />;
export const Death: React.VFC = () => <TarotSprite id={13} name={'Death'} svg={death} />;
export const Temperance: React.VFC = () => <TarotSprite id={14} name={'Temperance'} svg={temperance} />;
export const TheDevil: React.VFC = () => <TarotSprite id={15} name={'The Devil'} svg={devil} />;
export const TheTower: React.VFC = () => <TarotSprite id={16} name={'The Tower'} svg={tower} />;
export const TheStar: React.VFC = () => <TarotSprite id={17} name={'The Star'} svg={star} />;
export const TheMoon: React.VFC = () => <TarotSprite id={18} name={'The Moon'} svg={moon} />;
export const TheSun: React.VFC = () => <TarotSprite id={19} name={'The Sun'} svg={sun} />;
export const Judgement: React.VFC = () => <TarotSprite id={20} name={'Judgement'} svg={judgement} />;
export const TheWorld: React.VFC = () => <TarotSprite id={21} name={'The World'} svg={world} />;
