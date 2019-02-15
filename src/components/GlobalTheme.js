import React from "react";
import { ThemeProvider } from "styled-components";

import GlobalStyles, { theme } from "./styles/globalTheme";

const ThemeContext = React.createContext();
const GlobalTheme = ({ children }) => {
  const [Theme, setTheme] = React.useState("light");
  function handleOnChange() {
    Theme === "light" ? setTheme("dark") : setTheme("light");
    return localStorage.setItem("localTheme", JSON.stringify(Theme));
  }
  React.useLayoutEffect(() => {
    const getTheme = JSON.parse(localStorage.getItem("localTheme"));
    getTheme === "dark" ? setTheme("light") : setTheme("dark");
  }, []);
  return (
    <ThemeProvider theme={Theme === "light" ? theme.light : theme.dark}>
      <ThemeContext.Provider value={{ Theme, handleOnChange }}>
        {children}
        <GlobalStyles />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default GlobalTheme;
export { ThemeContext };
