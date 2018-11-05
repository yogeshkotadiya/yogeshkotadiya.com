import styled from "styled-components";

const IndexStyled = styled.div`
  width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  font-size: 2.2rem;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.lightBlack};
  line-height: 1.5;
  .introduction {
    width: 680px;
    margin: 0 auto;
  }
  #projects-heading {
    text-transform: uppercase;
    text-align: center;
    color: ${props => props.theme.primaryColor};
    width: 200px;
    height: 50px;
    position: relative;
    margin: 30px auto 0;
  }
  a {
    text-decoration: none;
    color: ${props => props.theme.primaryColor};
  }
  p {
    color: ${props => props.theme.lightBlack};
  }
  h2 {
    color: purple;
    font-size: 2.8rem;
  }
  h3 {
    font-size: 2rem;
  }
  p:nth-child(1) {
    text-align: center;
  }
  #name {
    text-align: center;
    display: block;
    color: #e53935;
    font-weight: 800;
    font-size: 3.4rem;
  }
`;

export default IndexStyled;
