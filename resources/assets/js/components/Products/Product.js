import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Products extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Product Name</div>

                            <div className="card-body">
                                Testing
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('products')) {
    ReactDOM.render(<Products />, document.getElementById('products'));
}
