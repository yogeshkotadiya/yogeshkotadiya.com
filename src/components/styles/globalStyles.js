import { createGlobalStyle } from "styled-components";

export const theme = {
  backgroundColor: "#fff",
  lightBlack: "#424242",
  grey100: "#F5F5F5",
  grey200: "#EEEEEE",
  primaryExtraLight: "#ffebee",
  primaryLight: "#FFCDD2",
  primary: "#e53935",
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
    width:100%;
    font-size: 10px;
    margin: 0 auto;
    background: "#F5F5F5";
  }
  #page-heading {
    text-transform: uppercase;
    color: ${props => props.theme.primary};
    width: 200px;
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
  p{
      color: ${theme.lightBlack};
  }
`;

export default GlobalStyles;
