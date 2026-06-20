const { app, BrowserWindow, ipcMain } = require("electron");

let win;

function createWindow() {
  win = new BrowserWindow({
    width: 850,
    height: 550,
    minWidth: 850,
    minHeight: 550,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  win.loadFile("html/index.html");
}

ipcMain.on("minimize-window", () => {
  win.minimize();
});

ipcMain.on("close-window", () => {
  win.close();
});

ipcMain.on("toggle-window", () => {
  if (win.isMaximized()) {
    win.unmaximize();
  } else {
    win.maximize();
  }
});

app.whenReady().then(createWindow);