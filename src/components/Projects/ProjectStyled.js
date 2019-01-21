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
`;

export default ProjectStyled;
