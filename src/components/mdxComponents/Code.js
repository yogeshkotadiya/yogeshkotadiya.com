import React from "react";
import PropTypes from "prop-types";
import { css } from "styled-components";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import highlightLine from "./HighlightLine";

const Code = ({ codeString, language, highlight, ...props }) => {
  let highlightLines = highlight === undefined ? [] : highlightLine(highlight);

  return props["react-live"] ? (
    <LiveProvider code={codeString} theme={theme} noInline={true}>
      <LiveEditor />
      <LiveError />
      <LivePreview />
    </LiveProvider>
  ) : (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <code className={className.split(" ")[1]}>
            {tokens.map((line, i) => (
              <div
                key={i}
                {...getLineProps({ line, key: i })}
                className={
                  highlightLines.includes(i + 1)
                    ? "gatsby-highlight-code-line"
                    : "code-line"
                }
              >
                <span
                  css={css`
                    display: inline-block;
                    width: 2em;
                    user-select: none;
                    opacity: 0.3;
                  `}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  );
};

export default Code;

Code.propTypes = {
  codeString: PropTypes.string,
  language: PropTypes.string,
  highlight: PropTypes.string,
  "react-live": PropTypes.string,
};
