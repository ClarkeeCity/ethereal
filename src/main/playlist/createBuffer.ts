import fs from 'fs';

export default async function createBuffer(filePath: string) {
  // fs.promises is a quick was of 'awaiting' asynch for fs to be done.
  return fs.promises.readFile(filePath);
}
