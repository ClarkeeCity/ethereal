import fs from 'fs';

export default async function createBuffer(filePath: string) {
  return fs.promises.readFile(filePath);
}
