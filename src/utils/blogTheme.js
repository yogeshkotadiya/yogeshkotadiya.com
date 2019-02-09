import styled from "styled-components";

const BlogTheme = styled.div`
  & > * {
    margin-bottom: 1em;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    box-shadow: 0 2px 0 0 ${props => props.theme.primary};
  }
  p {
    color: ${props => props.theme.textColor};
    line-height: 1.8;
  }
  h1,
  h2,
  h3,
  h4 {
    margin-top: 4rem;
    font-family: inherit;
    font-weight: 600;
  }
  blockquote {
    font-size: 1.8rem;
    border-left-color: ${props => props.theme.textColor};
    opacity: 0.8;
  }
  hr {
    background: ${props => props.theme.textColor};
    opacity: 0.6;
  }
`;
export default BlogTheme;
