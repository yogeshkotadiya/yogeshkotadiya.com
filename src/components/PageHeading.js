import styled from "styled-components";

const PageHeading = styled.h1`
  text-transform: uppercase;
  color: ${props => props.theme.primary};
  width: 100%;
  position: relative;
  margin: 5rem auto;
  text-align: center;
  font-size: 4rem;
  font-weight: 500;
  z-index: 21;
  grid-column: 1 / -1;
  /* &:before {
    content: "";
    position: absolute;
    height: 8px;
    background-color: ${props => props.theme.aquamarineSet};
    opacity: 0.2;
    width: 40%;
    left: 0;
    z-index: -2;
    top: 25%;
  } */
  &:after {
    content: "${props => props.headingName}";
    top: -60%;
    left: -50%;
    width: 100%;
    text-align: right;
    color: ${props => props.theme.aquamarineSet};
    opacity: 0.1;
    font-size: 7.5rem;
    font-weight: 600;
    z-index: -1;
    display: block;
    position: absolute;
  }
  @media screen and (max-width: 650px) {
    &:after {
      width: 120%;
      right: 0;
    }
  }
`;

export default PageHeading;
