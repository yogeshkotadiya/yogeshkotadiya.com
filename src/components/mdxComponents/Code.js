import React from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";

import highlightLine from "./HighlightLine";

const Code = ({ codeString, language, highlight, ...props }) => {
  let highlightLines = highlight === undefined ? [] : highlightLine(highlight);

  return props["react-live"] ? (
    <LiveProvider code={codeString} noInline={true}>
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
        <div className="gatsby-highlight">
          <pre className={className} style={style}>
            <code className={className.split(" ")[1]}>
              {tokens.map((line, i) => (
                <span
                  {...getLineProps({ line, key: i })}
                  className={
                    highlightLines.includes(i + 1)
                      ? "gatsby-highlight-code-line"
                      : "code-line"
                  }
                >
                  {line.map((token, key) => (
                    <span {...getTokenProps({ token, key })} />
                  ))}
                </span>
              ))}
            </code>
          </pre>
        </div>
      )}
    </Highlight>
  );
};

export default Code;
