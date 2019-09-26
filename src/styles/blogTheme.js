import styled from "styled-components";

const BlogTheme = styled.div`
  & > * {
    margin-bottom: 1em;
    font-family: "inconsolata", Arial, Helvetica, sans-serif;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    border-bottom: 2px dashed ${props => props.theme.primary};
  }
  p {
    color: ${props => props.theme.textColor};
    line-height: 1.6;
    font-size: 2rem;

    & > code {
      padding: 0.2rem 0.4rem;
      background-color: ${props => props.theme.blogHighLight};
    }
  }
  h1,
  h2,
  h3,
  h4 {
    margin-top: 4rem;
    font-family: inherit;
    font-weight: 600;

    &:hover {
      & > a {
        opacity: 1;
      }
    }
  }
  blockquote {
    font-size: 1.8rem;
    border-left-color: ${props => props.theme.primary};
    > p {
      opacity: 0.8;
    }
  }
  hr {
    background: ${props => props.theme.textColor};
    opacity: 0.6;
  }

  pre {
    margin-bottom: 2.5rem;
  }

  .anchor {
    /* position: absolute; */
    left: -4px;
    fill: ${props => props.theme.grey200};
    padding-right: 4px;
    margin-left: -20px;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }
`;
export default BlogTheme;
