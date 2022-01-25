import React, { Component } from 'react'
import SideMenu from '../SideMenuComponent/SideMenu';
import './StaffDash.css';
import img from '../../../Images/DNA-bro.png'
import img1 from '../../../Images/Medical care-pana.png'
import img2 from '../../../Images/Account-cuate (1).png'
import img3 from '../../../Images/Health professional team-pana.png'
import img4 from '../../../Images/Attached files-rafiki.png'

export default class StaffDash extends Component {

    onProfile(){
        window.location = "/MyProfile";
    }

    onResign(){
        window.location = "/Resignation";
    }
    
    



    render() {
        return (
            <div>
                <SideMenu/>
                <div className = "stdash">
                    <h2>Dashboard</h2>
                </div>
                <div className="mainTop">
                    <div className="sttop">
                        <h5>Hi Jennie,</h5>
                        <h3>Welcome back!</h3>
                        <img src={img} className = "stimg-top" alt="gal"/>
                    </div>
                    <div>
                        <img src={img1} className = "stimg-top2" alt="gal"/>
                    </div>

                    <div className="stTop-about">
                    <h3>It's time to live healthily</h3>
                    <h6>Hospital is a Registered Charity under the Charities Acts</h6>
                    <h6>(Registered Charity No. 20000394) and is administered and </h6>
                    <h6>managed in accordance with a Hospital Constitution approved by the </h6>
                    <h6>Charities Regulatory Authority.  The current Hospital Constitution was </h6>
                    <h6>approved in 2018.</h6>
                    </div>

                </div>

                <form action="" class="search">
                    <div class="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search Here"/>
                        <button type="submit" class="input-group-text"><i class="bi bi-search me-2"></i> Search</button>
                    </div>
                </form>

                <h4 className = "StquickStart" >Quick Start</h4>\

            <div className="stQuickStaff">
                <div className="stQuickStaff1" onClick={this.onProfile} >
                        <h4>Profile</h4>
                        <h6>click here to Enter your private profile and profile updates</h6>
                        <img src={img2} className = "stimg-pro" alt="gal"/>
                        <img src={img3} className = "stimg-pro2" alt="gal"/>
                </div>
                
                <div className="stQuickStaff2" onClick={this.onResign}>
                        <h4>Resign Form</h4>
                        <h6>Resignation form to get approval from adminResignation </h6>
                    
                        <img src={img4} className = "stimg-req" alt="gal"/>
                </div>
            </div>    
            </div>
        )
    }
}
