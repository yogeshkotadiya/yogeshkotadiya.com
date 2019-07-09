import * as React from "react";
import styled from "styled-components";

function Container(props) {
  return <ContainerStyled>{props.children}</ContainerStyled>;
}

export default Container;

const ContainerStyled = styled.div`
  padding: 1.5rem;
  margin: 5rem auto;
`;
