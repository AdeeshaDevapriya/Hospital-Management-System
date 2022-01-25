import React, { Component } from 'react';
import SideMenu from '../SideMenuComponent/SideMenu';
import './EditProfile.css';
import axios from 'axios';

export default class Profile extends Component {

    constructor(props){
        super(props);
        this.state ={employeeDetails:[],
        
            FirstName : "",
            LastName : "",
            Address : "",
            Gender : "",
            Email : "",
            Phone : "",
            Occupation : "",
            E_Id : ""
           }

        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
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
                console.log("item",item._id);
                this.setState({E_Id:item._id});
            })
        }).catch((err) => {
            console.log(err);
        })

        
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }



    onEdit(){
        const dataSet = {FirstName : this.state.FirstName, 
            LastName : this.state.LastName,
            Email: this.state.Email,
            Phone : this.state.Phone,
            Gender : this.state.Gender,
            Occupation : this.state.Occupation,
            Address : this.state.Address
        }



        axios.put(`http://localhost:8087/employee/update/${this.state.E_Id}`,dataSet)
        .then((data) => {
            console.log("Sucessfull!");
            alert("Successfully Updated!");
            window.location = "/ViewEmployeeList";
        }).catch((err) => {
            console.log(err);
        })
    }

    onDelete(){
        axios.delete(`http://localhost:8087/employee/delete/${this.state.E_Id}`)
        .then((data) =>{
            console.log("Successfully Deleted");
            alert("Successfully Deleted!");
            window.location = "/ViewEmployeeList";
        }).catch((err) => {
            console.console.log(err);
        })
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
                     <h4>Edit Profile</h4>
                     {this.state.employeeDetails.map((item,key) => (

                         <div class="row">
                            <div class="col-md-6">
                                <div class="inputs"> <label>First Name</label> <input class="form-control" id={"FirstName"}  name = {"FirstName"}  onChange = {this.onChange} type="text" placeholder={item.FirstName}/> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Last Name</label> <input class="form-control" id={"LastName"}  name = {"LastName"} onChange = {this.onChange} type="text" placeholder={item.LastName}/> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Email</label> <input class="form-control" id={"Email"}  name = {"Email"}  onChange = {this.onChange} type="Email" placeholder={item.Email}/> </div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Phone</label> <input class="form-control"  id={"Phone"}  name = {"Phone"}  onChange = {this.onChange} type="text" placeholder={item.Phone}/></div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Gender</label> <input class="form-control" id={"Gender"}  name = {"Gender"} onChange = {this.onChange} type="text" placeholder={item.Gender}/></div>
                            </div>
                            <div class="col-md-6">
                                <div class="inputs"> <label>Occupation</label> <input class="form-control" id={"Occupation"}  name = {"Occupation"}  onChange = {this.onChange} type="text" placeholder={item.Occupation}/></div>
                            </div>
                            <div class="col-md-12">
                                <div class="inputs"> <label>Address</label> <input class="form-control" id={"Address"}  name = {"Address"} onChange = {this.onChange} type="text" placeholder={item.Address}/> </div>
                            </div>
                        </div>
        
                   
                     ))}
                        <div class="ProJBtn">
                             <button onClick = {this.onDelete} class="ProJBtn1">Delete Profile</button>
                             <button onClick = {this.onEdit} class="ProJBtn2">Edit</button>
                        </div>
                    {/* </div> */}
                </div>
                </div> 
            </div>
        )
    }
}
