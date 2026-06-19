const { app, BrowserWindow } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,

    minWidth: 800,
    minHeight: 600,

    frame: false,
  });

  win.loadFile('html/index.html');
}

app.whenReady().then(createWindow);