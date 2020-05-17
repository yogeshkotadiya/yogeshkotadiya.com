import styled from "styled-components";

const BlogTheme = styled.div`
  & > * {
    margin-bottom: 1em;
    font-family: "inconsolata", Arial, Helvetica, sans-serif;
  }
  a {
    text-decoration: none;
    cursor: pointer;
    border-bottom: 2px dashed ${(props) => props.theme.primary};
  }
  p {
    color: ${(props) => props.theme.textColor};
    line-height: 1.6;
    font-size: 2rem;

    & > code {
      padding: 0.2rem 0.4rem;
      background-color: ${(props) => props.theme.blogHighLight};
    }
  }
  h1,
  h2,
  h3,
  h4 {
    margin-top: 4rem;
    font-family: inherit;
    font-weight: 800;

    &:hover {
      & > a {
        opacity: 1;
      }
    }
  }

  blockquote {
    font-size: 1.8rem;
    border-left-color: ${(props) => props.theme.primary};
    > p {
      opacity: 0.8;
    }
  }

  hr {
    background: ${(props) => props.theme.textColor};
    opacity: 0.6;
  }

  pre {
    margin-bottom: 2.5rem;
  }

  .anchor {
    /* position: absolute; */
    left: -4px;
    fill: ${(props) => props.theme.grey200};
    padding-right: 4px;
    margin-left: -20px;
    opacity: 0;
    &:hover {
      opacity: 1;
    }
  }

  .gatsby-resp-image-wrapper {
    display: flex !important;
  }

  .gatsby-resp-image-link {
    display: inline-block !important;
    box-shadow: 0 1.5rem 3rem -1rem rgba(0, 0, 0, 0.6);
    margin: 2rem auto;
  }

  .gatsby-resp-image-background-image {
    display: none !important;
  }

  .gatsby-resp-image-image {
    max-width: 30rem !important;
    display: block !important;
    position: unset !important;
  }
`;
export default BlogTheme;
