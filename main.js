const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 850,
    height: 550,

    minWidth: 850,
    minHeight: 550,

    frame: false,
  });

  win.loadFile('html/index.html');
}

app.whenReady().then(createWindow);