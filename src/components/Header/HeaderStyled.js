import styled from "styled-components";

const HeaderStyled = styled.div`
  position: sticky;
  background: ${props => props.theme.backgroundColor};
  top: 0;
  width: 100%;
  height: 100px;
  margin: 0px auto;
  margin-bottom: 20px;
  padding: 10px 20px 0 20px;
  font-size: 2.4rem;
  z-index: 50;
  transition: all 0.3s;

  &.header-scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    background: ${props => props.theme.white};
    & > #headerContent {
      max-width: 820px;
    }
  }
  a {
    text-decoration: none;
  }
  #headerContent {
    margin: 0 auto;
    margin-top: 10px;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    transition: all 0.3s;
    @media screen and (max-width: 680px) {
      max-width: 480px;
      margin: 20px auto;
      justify-content: center;
      align-items: center;
    }
    #header-name {
      color: ${props => props.theme.primary};
    }
    nav {
      font-size: 2.2rem;
      a {
        position: relative;
        color: ${props => props.theme.lightBlack};
        text-decoration: none;
        text-align: center;
        padding: 0 10px;
        transition: 0.2s all ease-in;
      }
      a::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 3px;
        bottom: 0;
        margin: -8px -10px;
        background-color: #e53935;
        visibility: hidden;
        transform: scaleX(0);
        transition: all 0.25s ease-in-out 0s;
      }
      a:hover::before {
        visibility: visible;
        transform: scaleX(1);
      }
    }
    #header-social-links {
      display: inline-block;
    }
  }
`;

export default HeaderStyled;
