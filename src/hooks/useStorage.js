export const ALLOWED_LS_KEYS = "COURSES";

export const useLocalStorage = () => {
  return {
    getFromStorage: (ALLOWED_LS_KEYS) => {
      return localStorage == null
        ? null
        : localStorage.getItem(ALLOWED_LS_KEYS);
    },
    setToStorage: (ALLOWED_LS_KEYS, value) =>
      localStorage == null
        ? null
        : localStorage.setItem(ALLOWED_LS_KEYS, value),
  };
};
