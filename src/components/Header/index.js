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
          @yogeshkotadiya
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
  height: 10rem;
  margin: 0 auto;
  font-size: 2.4rem;
  transition: all 0.3s;
  z-index: 10;
  display: flex;
  align-items: center;
}
#header {
  padding: 0 3rem;
}
#headerContent {
  position: relative;
  margin: 0 auto;
  padding: 0 4rem;
  width: 96rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s;
  #header-name {
    height: 5rem;
    margin: 5px;
    padding-bottom: 10px;
  }
  .desktop-nav {
    nav {
        font-size: 1.6rem;
        position: relative;
        padding: 0 5rem;
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
          height: 1px;
          bottom: 0;
          margin: 4px -10px;
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
    }
    .mobile-nav {
      display: none;
      visibility: hidden;
      padding: 0;
    }
  }
  @media screen and (max-width: 620px) {
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
      top: unset;
      bottom: 5rem;
      right: calc(50% - 90px);
    }
  }
`;
