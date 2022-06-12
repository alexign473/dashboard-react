import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

// какая кнопка навигации активна
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
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
