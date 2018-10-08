import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  height: 50px;
  color: purple;
  margin: 20px auto;
  font-size: 1.6rem;
  a {
    text-decoration: none;
  }
  nav {
    margin-top: 30px;
    font-size: 1.4rem;
    a {
      text-decoration: none;
      padding: 0 10px;
      transition: 0.2s all ease-in;
    }
    a:hover {
      padding-bottom: 4px;
    }
  }
`;

/*eslint-disable */
const Header = () => (
  <HeaderStyled>
    <Link to={'/'}>
      <h1>Yogesh Kotadiya</h1>
    </Link>
    <nav>
      <Link to={'/projects'}>Projects</Link>
      <Link to={'/blog'}>Blog</Link>
      <Link to={'/about'}>About Me</Link>
    </nav>
  </HeaderStyled>
);

export default Header;
