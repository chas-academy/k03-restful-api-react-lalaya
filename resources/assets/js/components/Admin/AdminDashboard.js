import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; 

export default class AdminDashboard extends Component {
    render() {
        return (
            <div className="container">
              <div className="col justify-content-center edit-links">
                  <a href="#" class="badge badge-light btn-block">Edit Users</a>
                  <a href="#" class="badge badge-light btn-block">Edit Products</a>
                </div>
            </div>
        );
    }
}

if (document.getElementById('adminDashboard')) {
    ReactDOM.render(<AdminDashboard />, document.getElementById('adminDashboard'));
}