import React from "react";
import Link from "next/link";
import HeaderStyled from "./HeaderStyled";

class Header extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        document.getElementById("header").classList.add("header-scrolled");
      } else {
        document.getElementById("header").classList.remove("header-scrolled");
      }
    });
  }
  render() {
    return (
      <HeaderStyled id="header">
        <div id="headerContent">
          <Link href={"/"}>
            <a>
              <img id="logo" src="../../static/logo.svg" alt="Logo" />
              <span id="header-name">&lt;Yogesh Kotadiya &frasl;&gt;</span>
            </a>
          </Link>
          <nav>
            <Link prefetch href={"/projects"}>
              <a>Projects</a>
            </Link>
            <Link prefetch href={"/blog"}>
              <a>Blog</a>
            </Link>
            <div id="header-social-links">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/yogeshkotadiya"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="#1da1f2"
                  stroke="#1da1f2"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/yogeshkotadiya"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a href="mailto:hiyogeshkotadiya@gmail.com">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="64 64 896 896"
                  data-icon="mail"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  fill="black"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z" />
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </HeaderStyled>
    );
  }
}

export default Header;
