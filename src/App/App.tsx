import React from 'react';
import styles from './App.module.scss';
import { Map } from '../Map';

export const App: React.VFC = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
      </header>
      <main>
        <Map />
      </main>
    </div>
  );
}

export default App;
