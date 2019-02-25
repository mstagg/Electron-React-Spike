const electron = require('electron'); // eslint-disable-line import/no-extraneous-dependencies

const { app } = electron;
const { BrowserWindow } = electron;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

require('update-electron-app')({
  repo: 'mstagg/Electron-React-Spike',
  updateInterval: '1 hour',
});

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680, icon: `${__dirname}/app-icon.png` });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  mainWindow.on('closed', () => (mainWindow = null)); // eslint-disable-line no-return-assign
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});
