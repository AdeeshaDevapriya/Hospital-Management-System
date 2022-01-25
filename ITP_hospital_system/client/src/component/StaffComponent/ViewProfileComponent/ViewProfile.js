import axios from 'axios';
import React, { Component } from 'react';
import SideMenu from '../SideMenuComponent/SideMenu';
import './ViewProfile.css'
import moment from 'moment';

export default class ViewProfile extends Component {

    constructor(props){
        super(props);
        this.state ={employeeDetails:[],
        
        Eno: ""}

    } 

    componentDidMount(){
        axios.get(`http://localhost:8087/employee/search/${this.props.match.params.id}`)
        .then((res) => {
            console.log("data",res);
            this.setState({
                employeeDetails:res.data
            })
            console.log(this.state.employeeDetails);
            this.state.employeeDetails.map((item,key) => {
                console.log("item",item);
                this.setState({Eno:item.EmpId})
            })
        }).catch((err) => {
            console.log(err);
        })
    }

    navigateEditProfile = () =>{
        window.location = `/EditProfile/${this.state.Eno}`
    }


    render() {
        return (
            <div className = "ProDiv">
               <div className = "ProDiv1"><SideMenu/></div> 
               <div className = "ProDiv2">
                <h1 align = "center">Profile</h1>
                {/* <div class="card p-3 text-center"> */}
                    {/* <div class="d-flex flex-row justify-content-center mb-3">
                        <div class="image"> <img src="https://i.imgur.com/hczKIze.jpg" class="rounded-circle"> <span><i class='bx bxs-camera-plus'/></i></span> </div>
                        <div class="d-flex flex-column ms-3 user-details">
                            <h4 class="mb-0">Zenda Grace</h4>
                            <div class="ratings"> <span>4.0</span> <i class='bx bx-star ms-1'></i> </div> <span>Pro Member</span>
                        </div>
                    </div> */}
                <div class="container mt-3">
                    {this.state.employeeDetails.map((item,key) => (
                        <div className="stProfileRow">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="inputs"> <label>First Name</label><p>{item.FirstName}</p></div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Last Name</label> <p>{item.LastName}</p> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Email</label> <p>{item.Email}</p> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Phone</label> <p>{item.Phone}</p></div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Gender</label><p>{item.Gender}</p></div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Occupation</label><p>{item.Occupation}</p></div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Address</label><p>{item.Address}</p></div>
                            </div>
                        <div class="col-md-6">
                                <div class="inputs"> <label>Date Of Birth</label><p>{moment(item.Dob).format("DD/MM/YYYY")}</p></div>
                            </div>
                        </div>
                        </div>
                      ))}  
                        
                        <div class="ProJBtn">
                             {/* <button class="ProJBtn1">Delete</button> */}
                             <button class="ProJBtn2" onClick = {() =>{
                                this.navigateEditProfile()} }>Edit Profile</button>
                        </div>
                    {/* </div> */}
                </div>
                </div> 
            </div>
        )
    }
}
