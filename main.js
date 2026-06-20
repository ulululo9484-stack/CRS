const { app, BrowserWindow, ipcMain } = require("electron");

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 850,
        height: 550,
        minWidth: 850,
        minHeight: 550,
        frame: false,
        roundedCorners: true,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    win.loadFile("html/index.html");

    const sendState = () => {
        if (!win.isDestroyed()) {
            win.webContents.send("window-state-changed");
        }
    };

    win.on("maximize", sendState);
    win.on("unmaximize", sendState);
    win.on("enter-full-screen", sendState);
    win.on("leave-full-screen", sendState);
    win.on("resize", sendState);
}

ipcMain.on("minimize-window", () => {
    win.minimize();
});

ipcMain.on("close-window", () => {
    win.close();
});

ipcMain.on("toggle-window", () => {
    // Если сейчас F11 fullscreen
    if (win.isFullScreen()) {
        win.setFullScreen(false);

        setTimeout(() => {
            if (win.isMaximized()) {
                win.unmaximize();
            }
        }, 50);

        return;
    }

    // Обычное переключение maximize/unmaximize
    if (win.isMaximized()) {
        win.unmaximize();
    } else {
        win.maximize();
    }
});

ipcMain.handle("is-full-size", () => {
    return win.isFullScreen() || win.isMaximized();
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});