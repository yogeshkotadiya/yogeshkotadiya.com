import React from 'react';
import { Link } from 'gatsby';
import logo from '../../assets/images/yogesh_logo.svg';
import HeaderStyled from './HeaderStyled';

class Header extends React.Component {
  state = {
    toggleTheme: true,
  };
  render() {
    return (
      <HeaderStyled>
        <Link to={'/'}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <nav>
          <Link to={'/projects'}>Projects</Link>
          <Link to={'/blog'}>Blog</Link>
          <Link to={'/about'}>About</Link>
          <button
            className="toggle-theme"
            onClick={() =>
              this.setState({ toggleTheme: !this.state.toggleTheme })
            }
          >
            {this.state.toggleTheme ? 'Dark' : 'Light'} Theme
          </button>
        </nav>
      </HeaderStyled>
    );
  }
}
export default Header;
