import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Toggle from "./Toggle";
import Logo from "../../../static/logo.svg";
import TwitterIcon from "../../../static/twitter.svg";
import GithubIcon from "../../../static/github.svg";
import MailIcon from "../../../static/mail.svg";

function Header() {
  return (
    <HeaderStyled id="header">
      <div id="headerContent">
        <Link to={"/"} id="header-name">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav>
          <Link to={"/projects"}>Projects</Link>
          <Link to={"/blog"}>Blog</Link>
          <div id="header-social-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/yogeshkotadiya"
              aria-label="Twitter"
            >
              <img
                className="icon icon-twitter"
                src={TwitterIcon}
                alt="Twitter Logo"
              />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/yogeshkotadiya"
              aria-label="Github"
            >
              <img
                className="icon icon-twitter"
                src={GithubIcon}
                alt="Twitter Logo"
              />
            </a>
            <a href="mailto:hiyogeshkotadiya@gmail.com" aria-label="Mail">
              <img
                className="icon icon-twitter"
                src={MailIcon}
                alt="Twitter Logo"
              />
            </a>
          </div>
        </nav>
        <Toggle />
      </div>
    </HeaderStyled>
  );
}

export default Header;

const HeaderStyled = styled.div`
  position: ${props => props.header};
  background: ${props => props.theme.backgroundColor};
  top: 0;
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
    font-family: "montserrat";
    #header-name {
      width: 50px;
      height: 50px;
      margin: 5px;
      padding-bottom: 10px;
    }
    nav {
      font-size: 2.2rem;
      position: relative;
      padding-right: 50px;
      a {
        position: relative;
        color: ${props => props.theme.lightBlack};
        text-align: center;
        padding: 10px;
        transition: 0.2s all ease-in;
        .icon {
          width: 25px;
          margin: 0;
          margin-bottom: -2px;
          stroke: ${props => props.theme.textColor};
          fill: ${props => props.theme.textColor};
        }
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
    #header-social-links {
      display: inline-block;
    }
  }
  @media screen and (max-width: 580px) {
    height: 135px;
    #headerContent {
      flex-direction: column;
      align-content: center;
      align-items: center;
      nav {
        padding-right: 10px;
      }
    }
    .toggleWrapper {
      top: 40%;
    }
  }
`;
