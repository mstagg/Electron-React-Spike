const electron = require('electron'); // eslint-disable-line import/no-extraneous-dependencies
const { autoUpdater } = require('electron-updater');

const {
  app,
  BrowserWindow,
  dialog,
} = electron;

const path = require('path');
const isDev = require('electron-is-dev');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 900, height: 680, icon: `${__dirname}/app-icon.png` });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`,
  );
  mainWindow.on('closed', () => (mainWindow = null)); // eslint-disable-line no-return-assign
}

app.on('ready', () => {
  autoUpdater.checkForUpdatesAndNotify();
  createWindow();
});

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

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => { // eslint-disable-line no-unused-vars
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
