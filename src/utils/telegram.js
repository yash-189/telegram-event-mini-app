import WebApp from '@twa-dev/sdk';

export const initTelegramApp = () => {
  WebApp.ready();
  WebApp.expand();
};

export const closeTelegramApp = () => {
  WebApp.close();
};

export const getUserData = () => {
  return WebApp.initDataUnsafe.user;
};

export const showAlert = (message) => {
  WebApp.showAlert(message);
};

export const showConfirm = (message) => {
  return new Promise((resolve) => {
    WebApp.showConfirm(message, (confirmed) => {
      resolve(confirmed);
    });
  });
};

export default WebApp;