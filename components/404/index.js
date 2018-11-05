import React from "react";
import Link from "next/link";
import NotFoundStyled from "./NotFoundStyled";

const NotFound = props => {
  return (
    <NotFoundStyled>
      <h1>404 !!!</h1>
      <p>
        <span role="img" aria-label="Goat Emoji">
          🐐
        </span>
        Mehhhhh!!!! I just ate the page you were looking for.
      </p>
      <p>
        Sorry
        <span role="img" aria-label="Emoji">
          🤷
        </span>
        ‍ Let's go back
        <Link href={"/"}>
          <a>
            HOME
            <span role="img" aria-label="Emoji">
              🏡
            </span>
          </a>
        </Link>
      </p>
    </NotFoundStyled>
  );
};

export default NotFound;
