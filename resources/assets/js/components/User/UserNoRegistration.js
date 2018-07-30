import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

export default class UserNoRegistration extends Component {
    render() {
        return (
          <div className="container">
            <div className="col justify-content-center">
              <form className="address-form">

                <div className="form-group">
                  <label htmlFor="text">Firstname</label>
                  <input type="name" className="form-control is-valid" id="input-name" placeholder="Firstname" required />
                </div>

                <div className="form-group">
                  <label htmlFor="text">Lastname</label>
                  <input type="name" className="form-control is-valid" id="input-lastname" placeholder="Lastname" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="input-email">Email</label>
                  <input type="email" className="form-control is-valid" id="input-email" placeholder="Email" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="input-address">Mobile</label>
                  <input type="number" className="form-control is-valid" id="input-mobile" placeholder="Mobile" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="input-address">Address</label>
                  <input type="text" className="form-control is-valid" id="input-address" placeholder="Street and number" required/>
                </div>
              
                <div className="form-group">
                  <label htmlFor="input-city">City</label>
                  <input type="text" className="form-control is-valid" id="input-city" required/>
                </div>

                <div className="form-group">
                  <label htmlFor="input-zip">Zip</label>
                  <input type="text" className="form-control is-valid" id="input-zip" required/>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-block btn-primary">Submit</button>
                </div>
              </form>
            </div>
        </div>

        );
    }
}

if (document.getElementById('userNoRegistration')) {
    ReactDOM.render(<UserNoRegistration />, document.getElementById('userNoRegistration'));
}