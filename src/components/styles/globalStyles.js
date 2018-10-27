import { injectGlobal } from 'react-emotion';

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
