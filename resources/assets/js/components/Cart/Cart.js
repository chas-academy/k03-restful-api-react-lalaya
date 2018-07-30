import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; 

export default class Cart extends Component {
    render() {
        return (
            <div className="container">
          
            </div>
        );
    }
}

if (document.getElementById('card')) {
    ReactDOM.render(<Cart />, document.getElementById('cart'));
}