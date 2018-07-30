import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

export default class UserEditProfile extends Component {
    render() {
        return (
            <div className="container">
              <div className="col justify-content-center">
                <form className="user-edit-profile">

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
                    <button type="submit" className="btn btn-block btn-primary">Update Profile</button>
                  </div>

                  <div className="form-group">
                    <button type="submit" className="btn btn-block btn-danger">Delete account</button>
                  </div>

                </form>
              </div>
            </div>

        );
    }
}


if (document.getElementById('userEditProfile')) {
    ReactDOM.render(<UserEditProfile />, document.getElementById('userEditProfile'));
}