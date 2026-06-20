const { ipcRenderer } = require("electron");

const close = document.getElementById("Close");
const unwrap = document.getElementById("Unwrap");
const Hide = document.getElementById("Hide");

close.addEventListener("click", () => {
    ipcRenderer.send("close-window");
});

Hide.addEventListener("click", () => {
    ipcRenderer.send("minimize-window");
});

unwrap.addEventListener("click", () => {
    ipcRenderer.send("toggle-window");
});