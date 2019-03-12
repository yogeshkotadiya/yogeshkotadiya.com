import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NotFoundPage = () => (
  <>
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
        ‍ Let&apos;s go back
      </p>
      <p>
        <Link to={"/"}>
          HOME
          <span role="img" aria-label="Emoji">
            🏡
          </span>
        </Link>
      </p>
    </NotFoundStyled>
  </>
);

export default React.memo(NotFoundPage);

const NotFoundStyled = styled.div`
  margin: 100px auto;
  font-size: 2rem;
  h1 {
    font-size: 8rem;
    text-align: center;
  }
  p {
    text-align: center;
    margin-top: 50px;
  }
  a {
    text-decoration: none;
    color: #ff5722;
  }
`;
