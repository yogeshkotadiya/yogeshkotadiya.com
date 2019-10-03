import { createGlobalStyle } from "styled-components";

export const theme = {
  light: {
    backgroundColor: "#f6f9fc",
    backgroundColorAlt: "#ffffff",
    lightGrey: "#a0a0a0",
    textColor: "#424242",
    grey100: "#F5F5F5",
    grey200: "#bdbcbc",
    primaryExtraLight: "#ffebee",
    primaryLight: "#FFCDD2",
    primary: "#ef5350",
    maxWidth: "1260px",
    dropShadow: "#000000a6",
    blogHighLight: "#FFCDD2",
  },
  dark: {
    backgroundColor: "#3c3c3c",
    backgroundColorAlt: "#2a2a2a",
    lightGrey: "#FFCDD2",
    textColor: "#f2f2f2",
    grey100: "#F5F5F5",
    grey200: "#EEEEEE",
    primaryExtraLight: "#ffebee",
    primaryLight: "#FFCDD2",
    primary: "#ff8484",
    maxWidth: "1260px",
    dropShadow: "#ef5650a6",
    blogHighLight: "#ef5350",
  },
};

const GlobalStyles = createGlobalStyle`

  html,body{
    background-color: ${props => props.theme.backgroundColor};
  }

  h1,h2,h3,h4,h5,h6,p{
      color: ${props => props.theme.textColor};
  }
  a,a.gatsby-resp-image-link {
    box-shadow: none;
    color: ${props => props.theme.primary};
  }
  .banner-credit{
    font-size: 1.4rem;
  }
  ::selection {
    color: #fff;
    background-color: ${props => props.theme.primary};
  }
`;

export default GlobalStyles;
