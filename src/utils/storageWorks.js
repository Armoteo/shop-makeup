export const setToLocalStorage = (key, data) => {
  window.localStorage.setItem(key, data);
};

export const getFromLocalStorage = (key) => {
  return window.localStorage.getItem(key);
};

export const removeLocalStorage = (key) => {
  window.localStorage.removeItem(key);
};
