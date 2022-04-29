// Module to control the application lifecycle.
// NOTE: Keep "requires", electron doesn't like import modules.
const { app, BrowserWindow, protocol, Menu, dialog } = require("electron");
const path = require("path");
const url = require("url");

// Create menu template with an array of objects.
const toolbarTemplate = [
  {
    // Ethereal
    label: "Ethereal",
    submenu: [
      {
        // File
        label: "File",
        submenu: [
          {
            // Select Playlist Folder
            label: "Select Playlist Folder",
            click() {
              //loadPlaylist();
            },
          },
          {
            // Exit
            label: "Exit",
            accelerator: "Ctrl+Q",
            click() {
              app.quit();
            },
          },
        ],
      },
      {
        // Help
        label: "Help",
        submenu: [
          {
            // About
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
    // Debugging and Struggling
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

// Create the native browser window.
const createEtherealWindow = () => {
  const mainWindow = new BrowserWindow({
    title: "Ethereal",
    icon: "public/images/logo192.png",
    minWidth: 800,
    minHeight: 600,

    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // In development, set it to localhost to allow live/hot-reloading.
  const appURL = app.isPackaged
    ? url.format({
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

const buildToolBar = (template) => {
  const toolbar = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(toolbar);
};

// This method will be called when Electron has finished its initialization.
app.whenReady().then(() => {
  createEtherealWindow();
  setupLocalFilesNormalizerProxy();
  buildToolBar(toolbarTemplate);

  app.on("activate", () => {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) {
      createEtherealWindow();
    }
  });
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
