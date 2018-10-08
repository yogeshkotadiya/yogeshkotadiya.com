import React from 'react';
//import { Link } from 'gatsby';
import styled, { injectGlobal } from 'react-emotion';
import Layout from '../components/layout';

injectGlobal`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Lato','Helvetica','sans-sarif';
    font-size: 10px;
  }
`;

const IndexStyled = styled.div`
  h2 {
    color: purple;
    font-size: 2.4rem;
  }
  h3 {
    font-size: 1.6rem;
  }
`;

const IndexPage = () => (
  <React.Fragment>
    <Layout />
    <IndexStyled>
      <h3>Until then you can find me at</h3>
      <a href="https://www.twitter.com/yogeshkotadiya">@Yogeshkotadiya</a>
      <br />
      <a href="https://github.com/yogeshkotadiya">Github</a>
    </IndexStyled>
  </React.Fragment>
);

export default IndexPage;
