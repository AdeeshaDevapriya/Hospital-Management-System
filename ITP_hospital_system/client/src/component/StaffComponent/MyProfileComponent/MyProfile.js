import React, { Component } from 'react'
import './MyProfile.css';
import SideMenu from '../SideMenuComponent/SideMenu';
import img from '../../../Images/professional-headshots-girl-laughing-outdoors-1.jpg'


export default class MyProfile extends Component {
    render() {
        return (
            
                <div>
                    <SideMenu/>

                    <div className="stProfileHeader">
                        <h3>Profile</h3>
                    </div>

                    <div className="stsideLine">
                    <div className="stProfileimg">
                        <div>
                            <div class="d-flex flex-column align-items-center text-center p-3 py-5">
                                <img class="rounded-circle mt-5" width="200px" height="260px" 
                                src={img} />
                                <span class="font-weight-bold">Jenuli Okithma</span>
                                <span class="text-black-50">jenuli99@gmail.com</span> 
                            </div>
                        </div>
                    
                 </div>
                    </div>

                    <div className="stMyProfileRow">
                        <div class="MyProfilerow">
                            <div className="stLeftProfile">
                                <div>
                                    <label>First Name</label>
                                    {/* <p>{item.FirstName}</p> */}
                                    <p>Jenuli</p>
                                </div>

                                <div>
                                    <label>Date Of Birth</label>
                                    {/* <p>{item.Dob}</p> */}
                                    <p>1999/11/15</p>
                                </div>

                                <div>
                                    <label>Employee ID</label>
                                    {/* <p>{item.EmpId}</p>  */}
                                    <p>EM0001</p> 
                                </div>

                                <div>
                                    <label>Email</label>
                                    {/* <p>{item.Email}</p>  */}
                                    <p>jenuli99@gmail.com</p> 
                                </div>
                            </div>

                            <div className="stRightProfile">
                                <div>
                                    <label>Last Name</label>
                                    {/* <p>{item.LastName}</p>  */}
                                    <p>Okithma</p> 
                                </div>

                                <div>
                                    <label>Address</label>
                                    {/* <p>{item.Address}</p> */}
                                    <p>22A/1/2 Colombo</p>

                                <div>
                                    <label>Phone</label>
                                    {/* <p>{item.Phone}</p> */}
                                    <p>0774852659</p>
                                </div>

                                <div>
                                    <label>Gender</label>
                                    {/* <p>{item.Gender}</p> */}
                                    <p>Female</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="stEditPro">
                     <button>Edit Profile</button>
                 </div>
               
            </div>
        )
    }
}
