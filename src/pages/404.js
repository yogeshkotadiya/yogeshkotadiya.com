import * as React from "react";
import { Link } from "gatsby";

import "styles/pages/404.css";

const NotFoundPage = () => (
  <div className="not-found">
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
  </div>
);

export default React.memo(NotFoundPage);
