import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    backgroundColor: "#fff",
    textColor: "#424242",
    grey100: "#F5F5F5",
    grey200: "#EEEEEE",
    primaryExtraLight: "#ffebee",
    primaryLight: "#FFCDD2",
    primary: "#ef5350",
    maxWidth: "960px",
    white: "#fff",
  },
  dark: {
    backgroundColor: "#3c3c3c",
    textColor: "#f2f2f2",
    grey100: "#F5F5F5",
    grey200: "#EEEEEE",
    primaryExtraLight: "#ffebee",
    primaryLight: "#FFCDD2",
    primary: "#ef5350",
    maxWidth: "960px",
    white: "#fff",
  },
};

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,body{
    height: 100%;
    width:100%;
    font-size: 10px;
    margin: 0 auto;
    background-color: ${props => props.theme.backgroundColor}
  }
  .page-heading {
    text-transform: uppercase;
    color: ${props => props.theme.primary};
    width: 250px;
    height: 50px;
    position: relative;
    margin: 0 auto;
    text-align: center;
    font-size: 3rem;
    &:after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 4px;
      background: ${props => props.theme.grey200};
      position: absolute;
      bottom: 0;
    }
  }

  h1,h2,h3,h4,h5,h6,p{
      color: ${props => props.theme.textColor};
  }
`;

export default GlobalStyles;
