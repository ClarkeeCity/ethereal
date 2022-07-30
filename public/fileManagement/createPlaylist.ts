const { dialog } = require("electron");
const fs = require('fs');
const path = require('path');

const acceptedFileTypes = [".mp3"];
const acceptedLookup = new Set(acceptedFileTypes);

// Recursive function to get all files from a selected directory.
const getAllFiles = (dirPath, arrayOfFiles) => {
  let directory = fs.readdirSync(dirPath);
  directory.forEach((filePath) => {
    if (fs.statSync(`${dirPath}/${filePath}`).isDirectory()) 
      arrayOfFiles = getAllFiles(`${dirPath}/${filePath}`, arrayOfFiles);
    else {
      // Check if file is an accpeted audio format.
      if (acceptedLookup.has(path.extname(`${dirPath}/${filePath}`)))
        arrayOfFiles.push(path.join(`${dirPath}/${filePath}`));
    }
  });

  return arrayOfFiles;
}

let files = [];

// Open up the dialog window, user will select directory. Then recursivelly
// get all files in said selected directory.
const fetchFiles = async () => {
  const response = await dialog.showOpenDialog({ properties: ["openDirectory"] });
  if (!response.canceled) {
    // handle fully qualified directory
    files = getAllFiles(response.filePaths[0], []);
  } else {
    console.log("no directory selected");
  }

  return files;
};

// When a playlist is loaded, it should be in an array.
const saveFileList = (filesToSave) => {
  const filesJSON = JSON.stringify(filesToSave);
  fs.writeFile("test.txt", filesJSON, (err) => {
    if (err) console.log(err);
  })
}


module.exports = {fetchFiles, saveFileList}

