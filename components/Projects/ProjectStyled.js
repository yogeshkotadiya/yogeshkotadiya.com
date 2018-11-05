import styled from "styled-components";

const ProjectStyled = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  font-size: 2.2rem;
  text-align: center;
  #projects-heading {
    text-transform: uppercase;
    color: ${props => props.theme.primaryColor};
    width: 200px;
    height: 50px;
    position: relative;
    margin: 0 auto;
    &:after {
      content: "";
      display: block;
      margin: 0 auto;
      width: 100%;
      height: 4px;
      background: ${props => props.theme.grey200};
      position: absolute;
      bottom: 0;
    }
  }
`;

export default ProjectStyled;
