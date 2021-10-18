import React from 'react';
import styles from './App.module.scss';
import { Header } from '../components/Header';
import { Map } from '../components/Map';


export const App: React.VFC = () => {

  return (
    <div className={styles.app}>
      <Header />
      <Map />
    </div>
  );
}

export default App;
