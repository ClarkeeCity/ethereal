import fs from 'fs';
// Read the playlist library file. Returns an array of filepaths.
async function readFile(): Promise<string[]> {
  return new Promise((resolve) => {
    fs.readFile('Ethereal.library', { encoding: 'utf-8' }, (err, data) => {
      // return empty if file does not exist.
      if (err) return resolve([]);
      return resolve(data.toString().split(/\n/g));
    });
  });
}

// Retreive current Ethereal.library data.
export default async function fetchPlaylist(): Promise<string[]> {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve) => {
    const fileData = await readFile();
    return resolve(fileData);
  });
}
