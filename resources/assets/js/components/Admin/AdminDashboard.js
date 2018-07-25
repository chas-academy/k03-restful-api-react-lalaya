import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AdminDashboard extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <h1>Hello Admin!</h1>
                        <button>Edit Users</button>
                        <button>Edit Products</button>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('adminDashboard')) {
    ReactDOM.render(<AdminDashboard />, document.getElementById('adminDashboard'));
}