import * as React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Toggle from "./Toggle";
import Menu from "./Mobile-nav";

function Header() {
  return (
    <HeaderStyled id="header">
      <div id="headerContent">
        <Link to={"/"} id="header-name">
          Yogesh Kotadiya
        </Link>
        <Menu color="#ef5350" />
        <div className="desktop-nav">
          <Nav />
        </div>
      </div>
    </HeaderStyled>
  );
}

export default Header;

const Nav = ({ toggle }) => {
  return (
    <>
      <nav>
        <Link
          onClick={toggle}
          aria-label="Navigate to Projects page"
          to={"/projects"}
        >
          Projects
        </Link>
        <Link onClick={toggle} aria-label="Navigate to Blog page" to={"/blog"}>
          Blog
        </Link>
        <Link
          onClick={toggle}
          aria-label="Navigate to About page"
          to={"/about"}
        >
          About
        </Link>
      </nav>
      <Toggle />
    </>
  );
};

export { Nav };

const HeaderStyled = styled.div`
  position: ${props => props.header};
  background: ${props => props.theme.backgroundColor};
  height: 100px;
  margin: 0 auto 20px;
  font-size: 2.4rem;
  transition: all 0.3s;
  z-index: 10;
  display: flex;
  align-items: center;
  &.header-scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    background: ${props => props.theme.backgroundColor};
    & > #headerContent {
      width: 820px;
    }
  }
  #headerContent {
    position: relative;
    margin: 0 auto;
    padding: 0 20px;
    width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: all 0.3s;
    #header-name {
      height: 50px;
      margin: 5px;
      padding-bottom: 10px;
    }
    nav {
      font-size: 1.8rem;
      position: relative;
      padding: 0.5rem 5rem;
      a {
        position: relative;
        color: ${props => props.theme.lightBlack};
        text-align: center;
        padding: 10px;
        transition: 0.2s all ease-in;
      }
      a::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        margin: -8px -10px;
        background-color: #ef5350;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.25s ease-in-out 0s;
      }
      a:hover::before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
    .mobile-nav {
      display: none;
      visibility: hidden;
    }
  }
  @media screen and (max-width: 600px) {
    height: 135px;
    #headerContent {
      justify-content: space-around;
      align-items: center;
      .mobile-nav {
        display: block;
        visibility: visible;
        nav > a {
          font-size: 2.2rem;
          color: ${props => props.theme.white};
        }
      }
      .desktop-nav {
        display: none;
        visibility: hidden;
      }
    }
    .toggleWrapper {
      top: none;
      bottom: 15rem;
      right: calc(50% - 90px);
    }
  }
`;
