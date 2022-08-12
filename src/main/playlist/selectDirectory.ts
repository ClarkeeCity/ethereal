import { dialog } from 'electron';
import fs from 'fs';
import path from 'path';

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

// fs readFile function, when done returns a Promise array of file
// directory paths.
async function readFile(): Promise<string[]> {
  return new Promise((resolve) => {
    fs.readFile('EtherealLibrary.ether', { encoding: 'utf-8' }, (err, data) => {
      // return empty if file does not exist.
      if (err) return resolve([]);
      return resolve(data.toString().split(/\n/g));
    });
  });
}

// Retreive current EtherealLibrary.ether data.
async function getCurrentPlaylist(): Promise<string[]> {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const readFilePromise = readFile();
    const fileData = await readFilePromise;
    return resolve(fileData);
  });
}

// Entrance of file, open up the dialog window, user will select directory.
// When selected, recursive function is used to fetch all files from
// said folder.
export default async function selectDirectory(): Promise<string[]> {
  // A HashSet of file paths to relate to for finalizing which files to append,
  // to the saved playlist file.
  const currentPlaylistPromise = getCurrentPlaylist();
  const currentPlaylist = await currentPlaylistPromise;

  const response = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  });
  if (!response.canceled) {
    indexFiles(response.filePaths[0], new Set(currentPlaylist));
  }

  return currentPlaylist.concat(files);
}
