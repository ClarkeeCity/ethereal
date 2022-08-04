import fs from 'fs';
import { BrowserWindow, ipcMain } from 'electron';
import { MetaDataInterface } from 'interface';
import saveMetadata from './saveMetadata';
import selectDirectory from './selectDirectory';

const playlistDataFilePath = 'playlist-data.json';

export default async function createDirectory(window: BrowserWindow) {
  const fetch = selectDirectory().then((filesArray) => filesArray);
  const files = await fetch;
  // TODO: At some point we will want to check if the file exists, probably
  // implement a hash with the filepath being the key?

  // TODO: Absolute temp for now, as we don't want to overwrite
  // an already generated playlist with custom data.
  // eslint-disable-next-line promise/catch-or-return, promise/always-return
  saveMetadata(files).then((resolve: MetaDataInterface[]) => {
    fs.appendFile(
      playlistDataFilePath,
      JSON.stringify(resolve),
      (err: unknown) => {
        if (err) console.error(err);
        console.log('ready to send to renderer');
      }
    );
    // Now that this data is saved, send it over to renderer to dispaly.
    window.webContents.send('update-playlist', resolve);
  });
}
