 import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Shop from './Shop/Shop';
{/*import Products from './Products/Product'; */}
import Navbar from './Common/Navbar';




export default class Index extends Component {
  render() {
    return (
      <div>
      <Navbar />

        <Shop />

       {/*  <Products /> */}
      </div>
    );
  }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
