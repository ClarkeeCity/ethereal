// Module to control the application lifecycle.
const { app, BrowserWindow, protocol, Menu, ipcMain ,dialog } = require("electron");
const path = require("path");
const fs = require('fs');
const url = require("url");
const load = require("./fileManagement/createPlaylist.ts");

// Developer tools, provided by electron-devtools-installer.
const { default: installExtension, REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS } = require('electron-devtools-installer');

let library;

const createEtherealWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Ethereal",
    icon: "public/images/logo192.png",
    //frame: false,
    minWidth: 800,
    minHeight: 600,
    webPreferences: {
      // TODO: Should we load the user's playlist if one exists here on load?
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // In development, set it to localhost to allow live/hot-reloading.
  const appURL = app.isPackaged ? 
    url.format({
        pathname: path.join(__dirname, "index.html"),
        protocol: "file:",
        slashes: true,
      })
    : "http://localhost:3000";

  mainWindow.loadURL(appURL);

  // Open DevTools onload in development mode.
  if (!app.isPackaged) {
    mainWindow.webContents.openDevTools();
  }
};

// Setup a local proxy to adjust the paths of requested files when loading
// them from the local production bundle (e.g.: local fonts, etc...).
// TODO: Learn more about this process.
const setupLocalFilesNormalizerProxy = () => {
  protocol.registerHttpProtocol(
    "file",
    (request, callback) => {
      const url = request.url.substr(8);
      callback({ path: path.normalize(`${__dirname}/${url}`) });
    },
    (error) => {
      if (error) console.error("Failed to register protocol");
    }
  );
};

const buildToolBar = () => { 
  const toolbarTemplate = [
  {
    label: "Ethereal",
    submenu: [
      {
        label: "File",
        submenu: [
          {
            label: "Select Playlist Folder",
            click() { 
              library = load.fetchFiles();
              library.then((results) => {
                //console.log(results);
                // save the results
                load.saveFileList(results);
                // display files to play from
                //load.renderList();
              });

              // display the playlist.
            },
          },
          {
            label: "Exit",
            accelerator: "Ctrl+Q",
            click() {
              app.quit();
            },
          },
        ],
      },
      {
        label: "Help",
        submenu: [
          {
            label: "About",
            click() {
              //openAboutWindow();
            },
          },
        ],
      },
    ],
  },
  {
    label: "Developer Tools",
    submenu: [
      {
        label: "Chrome Tools",
        accelerator: "Ctrl+I",
        click(item, focusedWindow) {
          focusedWindow.toggleDevTools(true);
        },
      },
    ],
  },
  ];

  const toolbar = Menu.buildFromTemplate(toolbarTemplate);
  Menu.setApplicationMenu(toolbar);
};

// This method will be called when Electron has finished its initialization.
app.whenReady().then(() => {

  installExtension(REACT_DEVELOPER_TOOLS)
    .then((name) => console.log(`Added Extension: ${name}`))
    .catch((err) => console.error(`An error has occured: ${err}`));
    
  installExtension(REDUX_DEVTOOLS)
    .then((name) => console.log(`Added Extension: ${name}`))
    .catch((err) => console.error(`An error has occured: ${err}`));

  createEtherealWindow();
  setupLocalFilesNormalizerProxy();
  buildToolBar();

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createEtherealWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
