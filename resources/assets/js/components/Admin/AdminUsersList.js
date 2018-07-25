import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class AdminUsersList extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                       
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('adminUsersList')) {
    ReactDOM.render(<AdminUsersList />, document.getElementById('adminUsersList'));
}