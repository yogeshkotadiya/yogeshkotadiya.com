import React from 'react';
//import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const IndexStyled = styled.div`
  h2 {
    color: purple;
    font-size: 24px;
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
