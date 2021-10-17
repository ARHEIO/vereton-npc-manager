import React, { useEffect, useState } from 'react';
import styles from './App.module.scss';
import { Map } from './Map';
import { Application } from 'pixi.js';
import { useWindowSize } from './hooks';
import { Header } from './Header';

export const App: React.VFC = () => {

  const windowSize = useWindowSize();

  const [app, setApp] = useState<Application>();

  useEffect(() => {
    if (windowSize != null) {
      setApp(new Application({
        height: windowSize.height - 170,
        width: windowSize.width,
      }));
    }
  }, [windowSize])

  return app ? (
    <div className={styles.app}>
      <Header app={app} />
      <main>
        <Map app={app} />
      </main>
    </div>
  ) : <p>Loading ...</p> ;
}

export default App;
