import styled from "styled-components";

const IndexStyled = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  font-size: 2.2rem;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.lightBlack};
  line-height: 1.5;
  .introduction {
    max-width: 680px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: minmax(1rem, 1fr) minmax(250px, 860px) minmax(
        1rem,
        1fr
      );
    & > * {
      grid-column: 2/3;
    }
    #intro {
      text-align: center;
    }
    img {
      width: 200px;
      display: block;
      margin: 0 auto;
      margin-bottom: 20px;
      border-radius: 50%;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.3);
    }
    #projects-heading {
      text-transform: uppercase;
      text-align: center;
      color: ${props => props.theme.primary};
      width: 200px;
      height: 50px;
      position: relative;
      margin: 30px auto 0;
    }
    a {
      text-decoration: none;
      color: ${props => props.theme.primary};
    }
    p {
      color: ${props => props.theme.lightBlack};
    }
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 2rem;
    }
    #name {
      display: block;
      color: #e53935;
      font-weight: 800;
      font-size: 3.4rem;
    }
  }
`;

export default IndexStyled;
