const { dialog } = require('electron');
const fs = require('fs');
const path = require('path');

const acceptedFileTypes = ['.mp3'];
const acceptedLookup = new Set(acceptedFileTypes);

const files = [] as string[];

// Recursive function to get all files from a selected directory.
const indexFiles = (dirPath: string) => {
  const item = fs.readdirSync(dirPath);
  item.forEach((filePath: string) => {
    if (fs.statSync(`${dirPath}/${filePath}`).isDirectory())
      // eslint-disable-next-line no-param-reassign
      indexFiles(`${dirPath}/${filePath}`);
    // if the item is a file, check file ext, if valid, then add to files list
    else if (acceptedLookup.has(path.extname(filePath))) {
      files.push(path.join(`${dirPath}/${filePath}`));
    }
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
    // eslint-disable-next-line no-console
    console.error('No directory selected');
  }

  return files;
}
