import React, { useState } from 'react';
import { Application } from 'pixi.js';
import styles from './Header.module.scss';
import { Button, Dropzone, InputChangeEvent, Modal, ModalBody, ModalHeader, Skeleton } from 'precise-ui';
import { generateSaveData, saveToFile } from '../../utils';
import { setMapState } from '../../utils/setMapState';

export const Header: React.VFC<{app?: Application}> = ({app}) => {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  if (!app) {
    return <Skeleton/>
  }

  const loadState = async ({ value }: InputChangeEvent<File[]>) => {
    try {
      const [ file ] = value;
      const loadedData = await file.text();
      setMapState(app, loadedData)

      setModalIsOpen(false);
    } catch (error) {
      console.error(error)
      alert('That chunk is not valid');
    }
  }

  const printState = () => {
    const data = generateSaveData(app);
    saveToFile(data);
  }

  return (
    <>
      <header className={styles.appHeader}>
        <div></div>
        <Button style={{height: 54}} onClick={() => setModalIsOpen(true)}>Load</Button>
        <Button style={{height: 54}} onClick={printState} type='button' >Print State</Button>
        <div></div>
      </header>
      <Modal open={modalIsOpen}>
        <ModalHeader title='Upload your state file' />
        <ModalBody>
          <Dropzone onChange={loadState} multiple={false} />
        </ModalBody>
      </Modal>
    </>
  );
}
