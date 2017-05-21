const _getLocalStore = (name) => {
  try {
    return JSON.parse(localStorage.getItem(name))
  } catch (err) {
    throw err
  }
};
const _saveLocalStore = (name, data) => {
  try {
    localStorage.setItem(name, JSON.stringify(data))
    return true
  } catch (err) {
    throw err
  }
};
const _removeLocalStore = (name) => {
  try {
    localStorage.removeItem(name)
    return true
  } catch (err) {
    throw err
  }
};

const getSession = () => {
  if (typeof window === 'undefined') {
    //return this._session;
  }
  else {
    return _getLocalStore('session');
  }
};
const saveSession = (token, userData) => {
  _saveLocalStore("session", {token, userData});
};
const cleanSession = (token, userData) => {
  _removeLocalStore("session");
};


export default {getSession, saveSession, cleanSession};
