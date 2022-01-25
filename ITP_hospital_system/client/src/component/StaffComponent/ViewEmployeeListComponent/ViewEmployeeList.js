import React, { Component } from 'react'
import SideMenu from '../SideMenuComponent/SideMenu';
import './ViewEmployeeList.css';
import axios from 'axios';

export default class ViewEmployeeList extends Component {

    constructor(props){
        super(props);
        this.state = {employeeDetails:[]}
    }

    componentDidMount(){
        axios.get("http://localhost:8087/employee/")
        .then((res) =>{
            console.log("data", res.data);
            this.setState({
                employeeDetails:res.data
            })
            console.log(this.state.employeeDetails);
            this.state.employeeDetails.map((item,key) => {
                console.log("item",item);
            })
        }).catch(err =>{
            console.log(err);
        })
    }



    navigateProfile = (id) =>{
        window.location = `/ViewProfile/${id}`
    }
   

    render() {
        return (
           
            <div>
                 <SideMenu/>
                
                <div className = "container" >
                <h2>Members</h2>
                 <table class="table table-striped table-hover">
                 <thead>
                        <tr>
                        <th scope="col">Employee Id</th>
                        <th scope="col">Member Name</th>
                        <th scope="col">Mobile</th>
                        <th scope="col">Email</th>
                        <th scope="col">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employeeDetails.map((item,key) => (
                               <tr key = {key} onClick = {() =>{
                                this.navigateProfile(item.EmpId)}
                               } >
                               {/* <th scope="row"></th> */}
                               <td>{item.EmpId}</td>
                               <td>{item.FirstName +" "+item.LastName}</td>
                               <td>{item.Phone}</td>
                               <td>{item.Email}</td>
                               <td>{item.Occupation}</td>
                               </tr>
                        ))}
                     
                    </tbody> 
                 </table>
                </div> 
            </div>
        )
    }
}
