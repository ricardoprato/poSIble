import { useState } from "react";
export const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item !== undefined ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });
  const setLocalStorage = (value) => {
    window.localStorage.setItem(key, value);
    setValue(value);
  };
  return [value, setLocalStorage];
};
