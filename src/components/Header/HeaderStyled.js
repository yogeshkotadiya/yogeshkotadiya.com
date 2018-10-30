import styled from 'react-emotion';

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 960px;
  height: 50px;
  color: purple;
  margin: 20px auto;
  padding: 0 20px 0 20px;
  font-size: 1.6rem;
  a {
    text-decoration: none;
  }
  .logo {
    margin-top: 10px;
    width: 80px;
    height: 80px;
    user-drag: none;
    -webkit-user-drag: none;
    -moz-user-select: none;
  }
  nav {
    margin-top: 30px;
    font-size: 1.4rem;
    a {
      position: relative;
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
    .toggle-theme {
      width: 140px;
      height: 40px;
      font-size: 1rem;
      margin-left: 20px;
      border-radius: 40px;
      color: #eef;
      background: linear-gradient(to left, #e53935, #ff5722);
      box-shadow: 0 0 5px #e53935;
      border: none;
      outline: none;
      transition: all 0.2s ease;
    }
    .toggle-theme:hover {
      cursor: pointer;
      box-shadow: 0 0 20px #e53935;
    }
    .toggle-theme:active {
      transform: translateY(2px);
    }
  }
`;

export default HeaderStyled;
