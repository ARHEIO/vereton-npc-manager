import { saveAs } from 'file-saver';

const createBlob = (text: string) => new Blob(
  [text],
  { type: 'text/plain;charset=utf-8' }
)

export const saveToFile = (encodedSaveData: string) => saveAs(
  createBlob(encodedSaveData),
  'veretonNpcManager.txt'
);
