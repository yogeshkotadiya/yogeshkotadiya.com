import styled from "styled-components";

const HeaderStyled = styled.div`
  position: sticky;
  background: ${props => props.theme.backgroundColor};
  top: 0;
  height: 100px;
  margin: 0 auto 20px;
  font-size: 2.4rem;
  transition: all 0.3s;
  display: flex;
  align-items: center;
  &.header-scrolled {
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    background: ${props => props.theme.white};
    & > #headerContent {
      width: 820px;
    }
  }
  a {
    text-decoration: none;
    outline: none;
  }
  #headerContent {
    margin: 0 auto;
    padding: 0 20px;
    width: 960px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    transition: all 0.3s;
    #header-name {
      color: ${props => props.theme.primary};
      padding-bottom: 10px;
    }
    nav {
      font-size: 2.2rem;
      a {
        position: relative;
        color: ${props => props.theme.lightBlack};
        text-align: center;
        padding: 10px;
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
  @media screen and (max-width: 680px) {
    #headerContent {
      justify-content: space-around;
    }
  }
`;

export default HeaderStyled;
