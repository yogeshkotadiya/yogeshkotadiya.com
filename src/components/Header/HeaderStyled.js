import styled from 'react-emotion';

const HeaderStyled = styled.div`
  position: sticky;
  background: ${props => props.theme.backgroundColor};
  top: 0;
  width: 100%;
  height: 100px;
  color: purple;
  margin: 0px auto;
  margin-bottom: 20px;
  padding: 10px 20px 0 20px;
  font-size: 2.4rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  a {
    text-decoration: none;
  }
  .headerContent {
    margin: 0 auto;
    margin-top: 10px;
    width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .logo {
      width: 60px;
      height: 60px;
      user-drag: none;
      -webkit-user-drag: none;
      -moz-user-select: none;
    }
    nav {
      font-size: 2.2rem;
      a {
        position: relative;
        color: ${props => props.theme.color};
        text-decoration: none;
        text-align: center;
        padding: 0 10px;
        transition: 0.2s all ease-in;
      }
      a::before {
        content: '';
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
