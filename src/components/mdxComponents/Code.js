import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import highlightLine from "./HighlightLine";

const Code = ({ codeString, language, ...props }) => {
  let highlightLines = highlightLine(props.highlight);

  if (props["react-live"]) {
    return (
      <LiveProvider code={codeString} noInline={true}>
        <LiveEditor />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={codeString}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div className="gatsby-highlight">
          <pre className={className} style={style}>
            <code className="language-jsx">
              {tokens.map((line, i) => {
                if (highlightLines.includes(i + 1)) {
                  return (
                    <span
                      {...getLineProps({ line, key: i })}
                      className={
                        highlightLines.includes(i + 1)
                          ? "gatsby-highlight-code-line"
                          : null
                      }
                    >
                      {line.map((token, key) => (
                        <span {...getTokenProps({ token, key })} />
                      ))}
                    </span>
                  );
                } else {
                  return line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ));
                }
              })}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
