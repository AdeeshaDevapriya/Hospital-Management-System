import React, { Component } from 'react'
import './mainint.css';
import axios from 'axios';
import imgsint from '../../../Images/Supermarket workers-rafiki.png'
import {Link} from 'react-router-dom';
import InventorySideMenu from '../InventorySideMenuComponent/InventorySideMenu'

export default class viewitem extends Component {
    onSubmitIntadd(){
        window.location = '/additem'
    }
    onSubmitIntlist() {
        window.location = '/viewitem'
    }
    render() {
        return ( 
            <div>
                <InventorySideMenu/>
            <div className="IntContainer"> 
                <div className="container"> 
                <br></br><h1> WELCOME TO INVENTORY MANAGEMENT </h1><br></br><br></br>
                <button type="submit" class="center1" onClick={this.onSubmitIntadd}>ADD PRODUCT TO INVENTORY</button>
                <button type="submit" outset class="center2" onClick={this.onSubmitIntlist}>INVENTORY LIST</button>
                </div>
                <img className="imgsint4" src={imgsint} alt="Search icon" ></img>
           </div>
           </div>
         )   
    }
}
