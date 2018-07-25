import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Shop extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                            <h1> Hello ! Welcome to this shop!</h1>
                            </div>

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

if (document.getElementById('shop')) {
    ReactDOM.render(<Shop />, document.getElementById('shop'));
}
