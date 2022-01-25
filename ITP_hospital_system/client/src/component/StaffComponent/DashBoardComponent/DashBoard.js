import React, { Component } from 'react';
import SideMenu from '../SideMenuComponent/SideMenu';
import './DashBoard.css';
import img from '../../../Images/Medicine-cuate.png'
import img2 from '../../../Images/Health professional team-amico.png'
import img3 from '../../../Images/Attached files-pana.png'
import img4 from '../../../Images/Data-rafiki.png'

export default class DashBoard extends Component {
    constructor(props){
        super(props);
        this.state ={
            image:"https://storyset.com/https://images.app.goo.gl/51c3xpLdmAotbmgE6/ophthalmologist/pana",
        }
    }
    render() {
        return (
            <div>
               <SideMenu/>
               <div class="mainDiv">
                <div className = "sthead">
                    <h1>Welcome to Ush</h1>
                    <h1>Medical Center</h1>
                    <h3>It's time to live healthily</h3>
                    <h6>Hospital is a Registered Charity under the Charities Acts</h6>
                    <h6>(Registered Charity No. 20000394) and is administered and </h6>
                    <h6>managed in accordance with a Hospital Constitution approved by the </h6>
                    <h6>Charities Regulatory Authority.  The current Hospital Constitution was </h6>
                    <h6>approved in 2018.</h6>
                </div>
                <div className = "dashImageJ">
                    <img src={img} className = "img-fluid" alt="gal"/>

                </div>
                </div>
                <form action="" class="search">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search Here"/>
                        <button type="submit" class="input-group-text"><i class="bi bi-search me-2"></i> Search</button>
                    </div>
                </form>
                
                <h4 className = "StquickStart" >Quick Start</h4>

          
                <div className="stQuickAdmin">
                    <div className="stQuickAdmin1">
                            <h4>Register</h4>
                            <h6>Register all members in hospital exclude doctors</h6>
                            <img src={img4} className = "stimg-reg" alt="gal"/>
                    </div>
                    
                    <div className="stQuickAdmin2">
                            <h4>Users</h4>
                            <h6>Registered user’s details all the departments in hospital exclude doctors </h6>
                            <img src={img2} className = "stimg-user" alt="gal"/>
                    </div>

                      
                    <div className="stQuickAdmin3">
                            <h4>Resign Requests</h4>
                            
                            <img src={img3} className = "stimg-resreq" alt="gal"/>
                    </div>
            </div> 
            
               
            </div>
        )
    }
}


