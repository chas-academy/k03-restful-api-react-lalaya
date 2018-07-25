import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AdminProductList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1>Products</h1>
                          <div className="">
                          </div>
      
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('adminProductList')) {
    ReactDOM.render(<AdminProductList />, document.getElementById('adminProductList'));
}