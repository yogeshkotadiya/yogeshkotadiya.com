import { createGlobalStyle } from 'styled-components';

export const theme = {
  backgroundColor: '#fff',
  color: '#424242',
  maxWidth: '960px',
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
  }
  #___gatsby{
    min-height: 100%;
    position: relative;
  }
`;

export default GlobalStyles;
