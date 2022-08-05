// Howler needs to read things in base64. Here we can trasnlate the .mp3 into
// base64, and then by using the IPC we send it to howler to play?
import fs from 'fs';

export default async function createBuffer(filePath: string) {
  // fs.readFile(filePath, (err, file) => {
  //   const base64file = Buffer.from(file).toString('base64');
  //   console.log(base64file);
  //   console.log('done');
  //   return Promise.resolve(base64file);
  // });
  // fs.promises is a quick was of 'awaiting' asynch for fs to be done.
  return fs.promises.readFile(filePath);
  // const buffer = fs.promises.readFile(filePath);
  // // eslint-disable-next-line promise/catch-or-return, promise/always-return
  // buffer.then((resolve) => {
  //   fs.promises.writeFile('stream.txt', resolve.toString('base64'));
  // });
}
