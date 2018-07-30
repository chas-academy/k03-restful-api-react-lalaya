import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

export default class AdminUsersList extends Component {
    render() {
        return (
            <div className="container">
              <div className="col justify-content-center">
                <form className="edit-users">

                  <div className="form-group">
                      <input className="form-control" type="search" placeholder="Search for user" aria-label="Search" />
                  </div>
                  <div className="form-group">
                      <button class="btn btn-block btn-primary" type="submit">Search</button>
                  </div>

                  <div className="form-group">
                    <label htmlFor="text">Firstname</label>
                    <input type="name" className="form-control" id="input-name" placeholder="Firstname" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="text">Lastname</label>
                    <input type="name" className="form-control" id="input-lastname" placeholder="Lastname"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-email">Email</label>
                    <input type="email" className="form-control" id="input-email" placeholder="Email"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-address">Mobile</label>
                    <input type="number" className="form-control" id="input-mobile" placeholder="Mobile"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-address">Address</label>
                    <input type="text" className="form-control" id="input-address" placeholder="Street and number"/>
                  </div>
                
                  <div className="form-group">
                    <label htmlFor="input-city">City</label>
                    <input type="text" className="form-control" id="input-city"/>
                  </div>

                  <div className="form-group">
                    <label htmlFor="input-zip">Zip</label>
                    <input type="text" className="form-control" id="input-zip"/>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-primary">Edit User</button>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-danger">Delete User</button>
                  </div>

                </form>
              </div>
            </div>

        );
    }
}


if (document.getElementById('adminUsersList')) {
    ReactDOM.render(<AdminUsersList />, document.getElementById('adminUsersList'));
}