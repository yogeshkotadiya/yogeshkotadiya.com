import styled from "styled-components";
import { rhythm } from "../../utils/typography";

const ProjectStyled = styled.div`
  font-family: "montserrat", "lato", "sans-serif";
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 0 ${rhythm(2 / 4)};
  h2 {
    margin-top: ${rhythm(2 / 4)};
  }
  .listStyle {
    margin: 10px 0;
    padding: 5px;
    padding-left: 10px;
    list-style: none;
    font-size: 1.4rem;
    height: 100%;
    background-color: #ffebee;
    border-radius: 10px;
    transition: all 0.2s ease;
    &:hover {
      border-left: 5px solid ${props => props.theme.primary};
      transform: translateX(5px);
      box-shadow: 1px 0 6px rgba(0, 0, 0, 0.2);
    }
  }
`;

export default ProjectStyled;
