// Utilities
const path = require("path");
const fs = require("fs");

// Electron
const { app, Menu } = require("electron");
require("@electron/remote/main").initialize();
let onlineStatusWindow

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.allowRendererProcessReuse = true;
app.on("ready", () => {
  // Main window
  const window = require("./src/window");
  mainWindow = window.createBrowserWindow(app);

  // Option 1: Uses Webtag and load a custom html file with external content
  //mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Option 2: Load directly an URL if you don't need interface customization
  try {
    mainWindow.loadURL("https://app.luxdentagency.co.uk/");
  } catch (error) {
    console.log('error')
  }
  

  // Option 3: Uses BrowserView to load an URL
  //const view = require("./src/view");
  //view.createBrowserView(mainWindow);

  // Display Dev Tools
  //mainWindow.openDevTools();

  // Menu (for standard keyboard shortcuts)
  const menu = require("./src/menu");
  const template = menu.createTemplate(app.name);
  const builtMenu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(builtMenu);
});

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  app.quit();
});
