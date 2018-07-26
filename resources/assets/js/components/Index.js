 import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Shop from './Shop/Shop';
import Products from './Products/Product';



export default class Index extends Component {
  render() {
    return (
      <div>
        <Shop />
        <Products />
      </div>
    );
  }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
