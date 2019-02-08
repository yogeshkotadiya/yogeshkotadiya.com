import React from "react";

function useTheme(props) {
  const [Theme, setTheme] = React.useState("light");
  function handleOnChange() {
    return Theme === "light" ? setTheme("dark") : setTheme("light");
  }
}

export { useTheme };
