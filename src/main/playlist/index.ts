import { BrowserWindow } from 'electron';
import writePlaylistFile from './writePlaylistFile';
import selectDirectory from './selectDirectory';

// const playlistDataFilePath = 'playlist-data.json';

export default async function addFiles(window: BrowserWindow) {
  const files = await selectDirectory(false);
  const saveCondition = writePlaylistFile(files);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  if ((await saveCondition) === true) {
    window.webContents.send('update-playlist', files);
  }
}
