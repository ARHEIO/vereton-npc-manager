import React, { useState } from 'react';
import styles from './App.module.scss';
import { Header } from '../components/Header';
import { Map } from '../components/Map';
import { Spinner } from 'precise-ui/dist/es6';
import { Stage } from '@inlet/react-pixi';
import { useWindowSize } from './hooks';
import { Application } from '@pixi/app';


export const App: React.VFC = () => {
  const [app, setApp] = useState<Application>();
  const windowSize = useWindowSize();

  if (!windowSize) {
    return <Spinner />;
  }

  return (
    <div className={styles.app}>
      <Header app={app} />
      <main>
        <Stage
          width={windowSize.width - 16}
          height={windowSize.height - (146)}
          options={{ backgroundColor: 0xababab }}
          onMount={(app) => setApp(app)}
        >
          <Map />
        </Stage>
      </main>
    </div>
  );
}

export default App;
