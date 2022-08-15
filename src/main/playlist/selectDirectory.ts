import { dialog } from 'electron';
import fs from 'fs';
import path from 'path';
import fetchPlaylist from './fetchPlaylist';

// TODO: For now lets work with mp3s.
const acceptedFileTypes = ['.mp3'];
const acceptedLookup = new Set(acceptedFileTypes);

// Recursive function to get all files from a selected directory.
const files = [] as string[];
function indexFiles(dirPath: string, fileSet: Set<string>) {
  const item = fs.readdirSync(dirPath);
  item.forEach((filePath: string) => {
    const pathStr = `${dirPath}/${filePath}`;
    if (fs.statSync(pathStr).isDirectory())
      // eslint-disable-next-line no-param-reassign
      indexFiles(pathStr, fileSet);
    // Else if its a valid filetype and the file already not in playlist.
    else if (
      acceptedLookup.has(path.extname(filePath)) &&
      fileSet.has(pathStr) === false
    )
      files.push(path.join(pathStr));
  });
}

// @param onLoadCheck is our conditional how to handle which files to render,
// if true, files already in the playlist library will be display.
// if false, then file & new files will be set to display.
export default async function selectDirectory(
  onLoadCheck: boolean
): Promise<string[]> {
  // Current file paths in the main library already saved which then can be
  // used to relate to on which files are new.
  const currentPlaylist = await fetchPlaylist();

  if (onLoadCheck === true) {
    return currentPlaylist;
  }

  const response = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  });
  if (!response.canceled) {
    indexFiles(response.filePaths[0], new Set(currentPlaylist));
  }

  return currentPlaylist.concat(files);
}
