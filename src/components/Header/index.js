import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const HeaderStyled = styled.div`
  background-color: eee;
  width: 960px;
  height: 50px;
  color: purple;
  margin: 20px auto;
  font-size: 16px;
  font-family: 'helvetica';

  a {
    text-decoration: none;
  }
  nav {
    float: right;
    font-size: 20px;
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
      <h1>
        <span>Hi! I'm </span>
        <a>Yogesh Kotadiya</a>
      </h1>
    </Link>
    <nav>
      <Link to={'/projects'}>
        <a>Projects</a>
      </Link>
      <Link to={'/blog'}>
        <a>Blog</a>
      </Link>
      <Link to={'/about'}>
        <a>About Me</a>
      </Link>
    </nav>
  </HeaderStyled>
);

export default Header;
