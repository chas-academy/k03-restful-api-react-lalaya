import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css'; 

export default class UserDashboard extends Component {
    render() {
        return (
            <div className="container">
              <div className="col justify-content-center user-dashboard">
                <a href="#" className="badge badge-light btn-block">Edit profile</a>
                <a href="#" className="badge badge-light btn-block">View current order</a>
                <a href="#" className="badge badge-light btn-block">View past orders</a>
              </div>
            </div>
        );
    }
}

if (document.getElementById('userDashboard')) {
    ReactDOM.render(<UserDashboard />, document.getElementById('userDashboard'));
}