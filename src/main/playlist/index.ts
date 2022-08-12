import { BrowserWindow } from 'electron';
import savePlaylist from './savePlaylist';
import selectDirectory from './selectDirectory';

// const playlistDataFilePath = 'playlist-data.json';

export default async function updateDirectory(window: BrowserWindow) {
  const fetch = selectDirectory();
  const files = await fetch;
  const saveCondition = savePlaylist(files);
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  if ((await saveCondition) === true) {
    window.webContents.send('update-playlist', files);
  }
}
