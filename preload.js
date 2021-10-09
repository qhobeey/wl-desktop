require('@electron/remote/main').initialize()

const { BrowserWindow } = require("@electron/remote");

window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("print_button").addEventListener("click", () => {
    const url = document.querySelector("webview").getAttribute("src");

    let printWindow = new BrowserWindow({ "auto-hide-menu-bar": true });
    printWindow.loadURL(url);

    printWindow.webContents.on("did-finish-load", () => {
      printWindow.webContents.print();
    });
  });
});
console.log('hhh')

// window.addEventListener('DOMContentLoaded', () => {
//   const replaceText = (selector, text) => {
//     const element = document.getElementById(selector)
//     if (element) element.innerText = text
//   }

//   for (const type of ['chrome', 'node', 'electron']) {
//     replaceText(`${type}-version`, process.versions[type])
//   }
// })
