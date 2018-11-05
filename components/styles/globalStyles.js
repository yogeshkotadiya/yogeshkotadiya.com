import { createGlobalStyle } from "styled-components";

export const theme = {
  backgroundColor: "#fff",
  lightBlack: "#424242",
  grey100: "#F5F5F5",
  grey200: "#EEEEEE",
  primaryLight: "#FFCDD2",
  primaryColor: "#e53935",
  maxWidth: "960px",
  white: "#fff"
};

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body{
    font-family: 'Lato','Helvetica','sans-sarif';
    height: 100%;
    font-size: 10px;
    margin: 0 auto;
    background: "#F5F5F5"
  }
`;

export default GlobalStyles;
