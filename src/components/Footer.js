import React from "react";
import styled from "styled-components";

import GatsbyIcon from "Images/gatsby.svg";

const Footer = () => {
  return (
    <Footerstyled>
      <p>
        © {new Date().getFullYear()} Yogesh Kotadiya, Built with Gatsby{"  "}
        <img
          src={GatsbyIcon}
          style={{ width: "20px", marginBottom: "-2px" }}
          alt="Gatsby Icon"
        />{" "}
      </p>
    </Footerstyled>
  );
};

export default React.memo(Footer);

const Footerstyled = styled.footer`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  padding: 0 10px;
  background: ${props => props.theme.backgroundColor};
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
`;
