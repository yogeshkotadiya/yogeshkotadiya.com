import React from "react";
import { Link } from "gatsby";
import { withTheme } from "styled-components";
import { ThemeContext } from "components/GlobalTheme";

import Toggle from "./Toggle";
import Menu from "./Mobile-nav";
import "styles/header.css";

const Nav = withTheme(({ toggle, theme }) => {
  const colorPickerRef = React.useRef(null);
  const { updateTheme } = React.useContext(ThemeContext);

  React.useLayoutEffect(() => {
    if (colorPickerRef.current) {
      colorPickerRef.current.addEventListener(
        "input",
        function (e) {
          updateTheme({
            primary: e.target.value,
          });
        },
        false
      );

      colorPickerRef.current.addEventListener(
        "change",
        function (e) {
          updateTheme({
            primary: e.target.value,
          });
        },
        false
      );

      return () => {
        colorPickerRef.current.removeEventListener("input", function () {
          console.log("removed");
        });

        colorPickerRef.current.removeEventListener("change", function () {
          console.log("removed");
        });
      };
    }
  }, [colorPickerRef]);

  // const handleOnChange = (e) => {
  //   console.log(e.target);
  // };

  return (
    <>
      <div className="nav">
        <Link
          onClick={toggle}
          aria-label="Navigate to Projects page"
          className="nav__link"
          css={css`
            color: ${(props) => props.theme.lightBlack};
          `}
          to={"/projects"}
        >
          Projects
        </Link>
        <Link
          onClick={toggle}
          className="nav__link"
          css={css`
            color: ${(props) => props.theme.lightBlack};
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
            color: ${(props) => props.theme.lightBlack};
          `}
          aria-label="Navigate to About page"
          to={"/about"}
        >
          About
        </Link>

        <input
          type="color"
          id="color-picker"
          name="color-picker"
          ref={colorPickerRef}
          value={theme.primary}
          // onInput={handleOnChange}
        />
      </div>
      <Toggle />
    </>
  );
});

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
