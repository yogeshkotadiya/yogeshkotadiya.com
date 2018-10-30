import { injectGlobal } from 'react-emotion';

export const theme = {
  light: {
    backgroundColor: '#fff',
    color: '#424242',
  },
  dark: {
    backgroundColor: '#616161',
    color: '#f5f5f5',
  },
};

injectGlobal`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Lato','Helvetica','sans-sarif';
    font-size: 10px;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default injectGlobal;
