import React, { Component } from 'react';
import './DoctorSideMenuAdmin.css';

export default class DoctorSideMenuAdmin extends Component {
  render() {
    return (
        <div align="left" className = "Sidenav">
        <nav className= "Navbar">
          <a className="nav-link active" href="DoctorAdminMain">Doctor</a>
          <a className="nav-link" href="#">Patient</a>
          <a className="nav-link" href="#">Inventory</a>
          <a className="nav-link" href="#">Room</a>
          <a className="nav-link" href="#">Finance</a>
          <a className="nav-link" href="#">Drugs</a>
          <a className="nav-link" href="#">Medical Records</a>
          <a className="nav-link" href="#">Staff</a>
        </nav>
      </div>
      
    )
  }
}
