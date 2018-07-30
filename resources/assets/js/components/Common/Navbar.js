import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import {slide as Menu} from 'react-burger-menu';
import nouchiiLogo from '../Image/Logo/nouchii_logo.png';


export default class Navbar extends Component {
    constructor() {
      super();
      this.state = {
        menuOpen: false
      };
    }

    showSetting (event) {
      event.preventDefault();
    }

    closeMenu() {
      this.setState({ menuOpen: false });
    }

    componentDidMount() {

    }


    render() {
        return (
          <header>
          <Menu id="burger-menu" disableCloseOnEsc left isOpen={this.state.menuOpen}>
          <img src={nouchiiLogo} className="navbar-brand mx-auto" alt="logo"/>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="cart" className="menu-item" href="/cart">Cart</a>
            <a id="product-category" className="menu-item" href="/category">Category</a>
            <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search"/>
            </div>
            </form>
              
            <a id="sign-in" className="menu-item" href="/sign-in">Sign in</a>
            <a id="register" className="menu-item" href="/register">Register</a>
          </Menu>
          </header>
          
      
        );
    }
}

if (document.getElementById('navbar')) {
    ReactDOM.render(<Navbar />, document.getElementById('navbar'));
}
