import * as React from "react";
import { Link } from "gatsby";

import GatsbyIcon from "Images/gatsby.svg";
import TwitterIcon from "Images/twitter.svg";
import GithubIcon from "Images/github.svg";
import LinkedInIcon from "Images/linkedin.svg";

import "styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="header-social-links">
        <a
          id="footer-email"
          href="mailto:hi@yogeshkotadiya.com"
          aria-label="Mail"
        >
          EMAIL
        </a>
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
      </div>
      <div>
        <p>
          © {new Date().getFullYear()} <Link to="/">@yogeshkotadiya</Link>
        </p>
        <p id="build-footer">
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
    </footer>
  );
}

export default Footer;
