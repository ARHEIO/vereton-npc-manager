import React, { useState } from 'react';
import styles from './App.module.scss';
import { Header } from '../../components/Header';
import { Spinner } from 'precise-ui';
import { Stage } from '@inlet/react-pixi';
import { useWindowSize } from '../../hooks';
import { Application } from '@pixi/app';
import { TheFool, TheMagician, ThePriestess, TheEmpress, TheEmperor, TheHierophant, TheLovers, TheChariot, Strength, TheHermit, TheWheel, Justice, TheHangedMan, Death, Temperance, TheDevil, TheTower, TheStar, TheMoon, TheSun, Judgement, TheWorld } from '../../components/TarotSprite';
import { VeretonSprite } from '../../components/VeretonSprite';

export const App: React.VFC = () => {
  const [app, setApp] = useState<Application>();
  const windowSize = useWindowSize();
  const HEADER_HEIGHT = 54 + 24 + 24 + 3;

  if (!windowSize) {
    return <Spinner />;
  }

  return (
    <div className={styles.app}>
      <Header app={app} /> 
      <main>
        <Stage
          width={windowSize.width - 8}
          height={windowSize.height - HEADER_HEIGHT - 54}
          options={{ backgroundColor: 0xababab }}
          onMount={(app) => setApp(app)}
        >
          <VeretonSprite>
            <TheFool />
            <TheMagician />
            <ThePriestess />
            <TheEmpress />
            <TheEmperor />
            <TheHierophant />
            <TheLovers />
            <TheChariot />
            <Strength />
            <TheHermit />
            <TheWheel />
            <Justice />
            <TheHangedMan />
            <Death />
            <Temperance />
            <TheDevil />
            <TheTower />
            <TheStar />
            <TheMoon />
            <TheSun />
            <Judgement />
            <TheWorld />
          </VeretonSprite>
        </Stage>
      </main>
      <footer style={{backgroundColor: '#282c34', height: '54px'}}></footer>
    </div>
  );
}

export default App;
