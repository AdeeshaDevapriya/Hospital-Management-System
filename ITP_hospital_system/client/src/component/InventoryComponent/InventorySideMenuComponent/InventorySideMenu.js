import React, { Component } from 'react';
import './InventorySideMenu.css';

export default class InventorySideMenu extends Component {
  render() {
    return (
        <div align="left" className = "Sidenav">
          <nav className= "Navbar">
            <a className="nav-link active" href="#">Doctor</a>
            <a className="nav-link" href="#">Patient</a>
            <a className="nav-link" href="/mainint">Inventory</a>
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

