import React, { createContext, useContext, useState } from "react";

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const StateContext = createContext({
  screenSize : "" as any,
  setScreenSize : "" as any,
  currentColor : "" as any,
  setCurrentColor : "" as any,
  currentMode : "" as any,
  setCurrentMode : "" as any,
  themeSettings : "" as any,
  setThemeSettings : "" as any,
  activeMenu : "" as any,
  setActiveMenu : "" as any,
  isClicked : "" as any,
  setIsClicked : "" as any,
  initialState : {} as any,
  setMode : (() => {}) as any,
  setColor : (() => {}) as any,
  handleClick : (() => {}) as any,
});



export const ContextProvider = ({ children }:any) => {
  const [screenSize, setScreenSize] = useState(undefined);
  const [currentColor, setCurrentColor] = useState("#03C9D7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e : any) => {
    setCurrentMode(e.target.value);
    localStorage.setItem("themeMode", e.target.value);

    setThemeSettings(false);
  };

  const setColor = (color : any) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);

    setThemeSettings(false);
  };

  const handleClick = (clicked :any) => setIsClicked({ ...initialState, [clicked]: true });

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <StateContext.Provider value={{ currentColor, currentMode, activeMenu, screenSize, setScreenSize, handleClick, isClicked, initialState, setIsClicked, setActiveMenu, setCurrentColor, setCurrentMode, setMode, setColor, themeSettings, setThemeSettings }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
