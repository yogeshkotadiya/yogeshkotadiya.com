import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

import GatsbyIcon from "Images/gatsby.svg";
import TwitterIcon from "Images/twitter.svg";
import GithubIcon from "Images/github.svg";
import LinkedInIcon from "Images/linkedin.svg";
import MailIcon from "Images/mail.svg";

const Footer = () => {
  return (
    <Footerstyled>
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
            className="icon icon-Github"
            src={GithubIcon}
            alt="Github Logo"
          />
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/yogeshkotadiya/"
          aria-label="LinkedIn"
        >
          <img
            className="icon icon-linkedIn"
            src={LinkedInIcon}
            alt="LinkedIn Logo"
          />
        </a>
        <a href="mailto:hiyogeshkotadiya@gmail.com" aria-label="Mail">
          <img className="icon icon-email" src={MailIcon} alt="Email Icon" />
        </a>
      </div>
      <div>
        <p>
          © {new Date().getFullYear()} <Link to="/">Yogesh Kotadiya</Link>
        </p>
        <p>
          Built with{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://gatsbyjs.org"
          >
            Gatsby
          </a>
          {"  "}
          <img
            src={GatsbyIcon}
            style={{ width: "20px", marginBottom: "-2px" }}
            alt="Gatsby Icon"
          />
        </p>
      </div>
    </Footerstyled>
  );
};

export default React.memo(Footer);

const Footerstyled = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  padding: 0 10px;
  margin-top: 1rem;
  background: #1a1835;
  height: 400px;
  bottom: 0;
  left: 0;
  right: 0;
  p {
    color: #fff;
    text-align: center;
  }
  a > .icon {
    width: 3.5rem;
    margin: 0 1rem;
    margin-bottom: -2px;
    stroke: ${props => props.theme.textColor};
    fill: ${props => props.theme.textColor};
    opacity: 0.8;
    :hover {
      opacity: 1;
    }
  }
  #header-social-links {
    max-width: 200px;
    margin: 1rem auto;
    display: flex;
    justify-content: space-around;
  }
`;
