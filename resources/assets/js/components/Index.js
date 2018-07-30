import React, { Component } from 'react';
import ReactDOM from 'react-dom';
{/* import Shop from './Shop/Shop'; */}
{/*}mport Products from './Products/Product'; */}
{/* import AdminDashboard from './Admin/AdminDashboard'; */}
{/* import AdminUserList from './Admin/AdminUsersList'; */}
{/* import AdminProductsList from './Admin/AdminProductsList'; */}
{/* import UserNoRegistration from './User/UserNoRegistration'; */}
{/* import UserEditProfile from './User/UserEditProfile'; */}
import UserDashboard from './User/UserDashboard'; 


import Navbar from './Common/Navbar';




export default class Index extends Component {
  render() {
    return (
      <div>
      <Navbar />
        {/* <AdminUserList /> */}
        {/* <AdminProductsList /> */}
        {/* <AdminDashboard /> */}
        {/* <Shop />*/}
        {/* <Products /> */}
        {/* <UserNoRegistration /> */}
        {/* <UserEditProfile /> */}
        <UserDashboard />


      </div>
    );
  }
}

if (document.getElementById('app')) {
    ReactDOM.render(<Index />, document.getElementById('app'));
}
