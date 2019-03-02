const electron = require('electron'); // eslint-disable-line import/no-extraneous-dependencies
const { autoUpdater } = require('electron-updater');

const {
  app,
  BrowserWindow,
  dialog,
  ipcMain,
} = electron;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow = null;
let displayWindow = null;

function createMainWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680, icon: path.join(__dirname, 'icon.png') });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000?window=main'
      : `file://${path.join(__dirname, '../build/index.html?window=main')}`,
  );
  mainWindow.on('closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });
}

function createDisplayWindow() {
  displayWindow = new BrowserWindow({ width: 400, height: 400, icon: path.join(__dirname, 'icon.png') });
  displayWindow.loadURL(
    isDev
      ? 'http://localhost:3000?window=display'
      : `file://${path.join(__dirname, '../build/index.html?window=display')}`,
  );
  displayWindow.on('closed', () => (displayWindow = null)); // eslint-disable-line no-return-assign
}

app.on('ready', () => {
  autoUpdater.checkForUpdatesAndNotify();
  createMainWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createMainWindow();
  }
});

ipcMain.on('display-window', () => {
  if (displayWindow === null) {
    createDisplayWindow();
  }
});

autoUpdater.on('update-downloaded', () => {
  const dialogOpts = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'New Version Available',
    message: 'A new version has been downloaded. Restart the application to apply the updates.',
    detail: 'A new version has been downloaded.',
  };

  dialog.showMessageBox(dialogOpts, (response) => {
    if (response === 0) autoUpdater.quitAndInstall();
  });
});
