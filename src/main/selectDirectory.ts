const { dialog } = require('electron');
const fs = require('fs');
const path = require('path');

const acceptedFileTypes = ['.mp3'];
const acceptedLookup = new Set(acceptedFileTypes);

const files = [] as string[];

// fetch indidiual information about the files we are importing.
// song name
// artist
// album
// year
// length

// Recursive function to get all files from a selected directory.
const indexFiles = (dirPath: string) => {
  const item = fs.readdirSync(dirPath);
  item.forEach((filePath: string) => {
    if (fs.statSync(`${dirPath}/${filePath}`).isDirectory())
      // eslint-disable-next-line no-param-reassign
      indexFiles(`${dirPath}/${filePath}`);
    else if (acceptedLookup.has(path.extname(filePath))) {
      files.push(path.join(`${dirPath}/${filePath}`));
    }
  });
};

// After an array of files are fetched, save them in a local JSON
const saveFileList = (filesToSave: string[]) => {
  const filesJSON = JSON.stringify(filesToSave);
  fs.writeFile('test.txt', filesJSON, (err: Promise<unknown>) => {
    if (err) console.log(err);
  });
};

// Open up the dialog window, user will select directory.
// When selected, recursive function is used to fetch all files from
// said folder.
export default async function selectDirectory() {
  const response = await dialog.showOpenDialog({
    properties: ['openDirectory'],
  });
  if (!response.canceled) {
    indexFiles(response.filePaths[0]);
  } else {
    console.error('no directory selected');
  }

  saveFileList(files);
}
