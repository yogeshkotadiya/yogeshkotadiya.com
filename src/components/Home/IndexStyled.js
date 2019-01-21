import styled from "styled-components";

const IndexStyled = styled.div`
  font-family: "montserrat", "lato", "sans-serif";
  margin: 0 auto;
  padding: 20px;
  font-size: 2.2rem;
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.lightBlack};
  display: flex;
  justify-content: center;
  line-height: 1.5;
  .introduction {
    width: 680px;
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
    a {
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
      color: #ef5350;
      font-weight: 800;
      font-size: 3.4rem;
    }
  }
`;

export default IndexStyled;
