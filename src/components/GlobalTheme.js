import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GlobalStyles, { theme } from "styles/globalTheme";

const ThemeContext = React.createContext(); // I know we can destrucure this in import but this is the way I prefer.
const GlobalTheme = ({ children }) => {
  const [Theme, setTheme] = React.useState("light");
  function handleOnChange() {
    Theme === "light" ? setTheme("dark") : setTheme("light");
    return localStorage.setItem("localTheme", JSON.stringify(Theme));
  }
  React.useEffect(() => {
    const getTheme = JSON.parse(localStorage.getItem("localTheme"));
    getTheme === "dark" ? setTheme("light") : setTheme("dark");
  }, []);
  return (
    <ThemeProvider theme={theme[Theme]}>
      <ThemeContext.Provider value={{ Theme, handleOnChange }}>
        {children}
        <GlobalStyles />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default GlobalTheme;
export { ThemeContext };

GlobalTheme.propTypes = {
  children: PropTypes.any,
};
