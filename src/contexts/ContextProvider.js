import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// активная кнопка навигации
const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

// провайдер контекста для меню слева и панель навигации
export const ContextProvider = ({ children }) => {
  // активная ссылка меню
  const [activeMenu, setActiveMenu] = useState(true);
  // активная кнопка навигации
  const [isClicked, setIsClicked] = useState(initialState);
  // ширина экрана
  const [screenSize, setScreenSize] = useState(null);
  // тема
  const [currentColor, setCurrentColor] = useState('#03c9d7');
  const [currentMode, setCurrentMode] = useState('Light');
  // меню настроек темы
  const [themeSettings, setThemeSettings] = useState(false);

  // обработчик темы и сохранение в localstorage
  const setMode = (e) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
    setThemeSettings(false);
  };

  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
    setThemeSettings(false);
  };

  // обработчик кнопок навигации
  const handleClick = (clicked) => {
    setIsClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setIsClicked,
        handleClick,
        screenSize,
        setScreenSize,
        setColor,
        setMode,
        currentMode,
        currentColor,
        themeSettings,
        setThemeSettings,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
