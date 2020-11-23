import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "styled-components";

import GlobalStyles, { theme } from "styles/globalTheme";

const ThemeContext = React.createContext();

const GlobalTheme = ({ children }) => {
  const [Theme, setTheme] = React.useState("light");
  const [globalTheme, setGlobalTheme] = React.useState(theme[Theme]);

  function handleOnChange() {
    Theme === "light" ? setTheme("dark") : setTheme("light");
    return localStorage.setItem("localTheme", JSON.stringify(Theme));
  }

  React.useEffect(() => {
    const getTheme = JSON.parse(localStorage.getItem("localTheme"));
    if (!getTheme) {
      setTheme("light");
    } else {
      getTheme === "dark" ? setTheme("light") : setTheme("dark");
    }
  }, []);

  React.useEffect(() => {
    setGlobalTheme({
      ...theme[Theme],
    });
  }, [Theme]);

  /**
   * Update current Global Theme Colors
   * @param {Object} newtheme - New theme with updated colors swatches
   */
  const updateTheme = (newtheme) => {
    setGlobalTheme((currentTheme) => ({
      ...currentTheme,
      ...newtheme,
    }));
  };

  return (
    <ThemeProvider theme={globalTheme}>
      <ThemeContext.Provider value={{ Theme, handleOnChange, updateTheme }}>
        {children}
        <GlobalStyles />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

export default GlobalTheme;
export { ThemeContext };

GlobalTheme.propTypes = {
  children: PropTypes.node,
};
