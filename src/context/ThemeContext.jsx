import React, { createContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [isDark, toggleIsDark] = useState(true);
  return (
    <ThemeContext.Provider value={{ isDark, toggleIsDark }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
