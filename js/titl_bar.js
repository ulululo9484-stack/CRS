const { ipcRenderer } = require("electron");

const close = document.getElementById("Close");
const unwrap = document.getElementById("Unwrap");
const Hide = document.getElementById("Hide");
const unwrapImg = document.getElementById("unwrapImg");

async function updateWindowIcon() {
    const expanded = await ipcRenderer.invoke("is-full-size");

    if (unwrapImg) {
        unwrapImg.src = expanded
            ? "../png/unwraped.png"
            : "../png/unwrap.png";
    }
}

close.addEventListener("click", () => {
    ipcRenderer.send("close-window");
});

Hide.addEventListener("click", () => {
    ipcRenderer.send("minimize-window");
});

unwrap.addEventListener("click", () => {
    ipcRenderer.send("toggle-window");
});

ipcRenderer.on("window-state-changed", () => {
    updateWindowIcon();
});

window.addEventListener("DOMContentLoaded", () => {
    updateWindowIcon();
});