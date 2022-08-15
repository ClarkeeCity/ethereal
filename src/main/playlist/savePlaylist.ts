import fs from 'fs';

const playlistFilePath = 'Ethereal.library';
export default async function savePlaylist(files: string[]): Promise<boolean> {
  return new Promise((resolve) => {
    fs.writeFile(playlistFilePath, files.join('\n'), (err) => {
      if (err) return resolve(false);
      return resolve(true);
    });
  });
}
