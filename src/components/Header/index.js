import React from "react";
import { Link } from "gatsby";
import { css } from "styled-components";

import Toggle from "./Toggle";
import Menu from "./Mobile-nav";
import "styles/header.css";

const Nav = ({ toggle }) => {
  return (
    <>
      <div className="nav">
        <Link
          onClick={toggle}
          aria-label="Navigate to Projects page"
          className="nav__link"
          css={css`
            color: ${props => props.theme.lightBlack};
          `}
          to={"/projects"}
        >
          Projects
        </Link>
        <Link
          onClick={toggle}
          className="nav__link"
          css={css`
            color: ${props => props.theme.lightBlack};
          `}
          aria-label="Navigate to Blog page"
          to={"/blog"}
        >
          Blog
        </Link>
        <Link
          onClick={toggle}
          className="nav__link"
          css={css`
            color: ${props => props.theme.lightBlack};
          `}
          aria-label="Navigate to About page"
          to={"/about"}
        >
          About
        </Link>
      </div>
      <Toggle />
    </>
  );
};

export { Nav };

function Header() {
  return (
    <nav className="header">
      <div className="headerContent">
        <Link to={"/"} className="header-name">
          @yogeshkotadiya
        </Link>
        <div className="desktop-nav">
          <Nav />
        </div>
        <Menu color="#ef5350" />
      </div>
    </nav>
  );
}

export default Header;
