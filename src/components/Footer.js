import React from "react";
import styled from "styled-components";

const Footerstyled = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  background: ${props => props.theme.backgroundColor};
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
`;

const Footer = () => {
  return (
    <Footerstyled>
      <p>© {new Date().getFullYear()} Yogesh Kotadiya</p>
    </Footerstyled>
  );
};

export default Footer;
