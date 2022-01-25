import React, { Component } from 'react'
import './DoctorAdd.css';
import axios from 'axios';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'

export default class DoctorAdd extends Component {

    constructor(props){
        super(props);
        this.state ={
            name : "",
            doctorid : "",
            contactno : "" ,
            specialization : "",
            department : "",
            designation : "",
            password : "",
            conpassword : "",
           
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

    }

    onChange= async (e) => {
      e.preventDefault();
        this.setState({[e.target.id]: e.target.value});
    }


    onSubmit = async (e) => {
      e.preventDefault();
        const datasetDoc = {  
            name : this.state.name, 
            doctorid : this.state.doctorid,
            contactno : this.state.contactno,
            specialization : this.state.specialization,
            department : this.state.department,
            designation : this.state.designation,
            password : this.state.password,
            conpassword : this.state.conpassword,
    
        }
        
        console.log(datasetDoc);
        

        if(this.state.password === this.state.conpassword){
        await axios.post(`http://localhost:8087/doctor/add`,datasetDoc)
        .then(res =>{
            console.log("Successfully registered");
            alert("Doctor successfully added!");
         window.location = "/DoctorAllView";
        //  return false;
        }).catch((err) =>{
            console.log("Error",err);
        }) 
    } else{
        alert("Password Not Matched!");
    }
    }

    
    render() {
        
        return (
          <div>
            <DoctorSideMenuAdmin/>
            <div className="DocContainer"> 
            <div className ="container">
            <div className="DoctorAdd">
            <h1>Add New Doctors</h1>

            <form className="AddDocForm">
  <div class="form-group">
    <label for="name" >Doctor name</label>
    <br />
    <input type="text" class="form-control" id="name" onChange={this.onChange} placeholder="Dr." required/>
  </div>
 
  <div class="form-group">
    <label for="doctorid">Doctor Id</label> <br/>
    <input type="text" class="form-control" id="doctorid" onChange={this.onChange} placeholder="DR" required/>
  </div>

  <div class="form-group">
    <label for="contactno">Contact Number</label><br/>
    <input type="text" class="form-control" id="contactno" onChange={this.onChange} placeholder="+94"/>
  </div>

  <div class="form-group">
    <label for="specialization">Specialization</label><br/>
    <input type="text" class="form-control" id="specialization" onChange={this.onChange} placeholder="Specialization" required />
  </div>

  <div class="form-group">
    <label for="department">Department</label><br/>
    <input type="text" class="form-control" id="department" onChange={this.onChange} placeholder="Department"/>
  </div>

  <div class="form-group">
    <label for="designation">Designation</label><br/>
    <input type="text" class="form-control" id="designation" onChange={this.onChange} placeholder="Designation"/>
  </div>
  
  <div class="form-group">
    <label for="password">Password</label><br/>
    <input type="password" class="form-control" id="password" onChange={this.onChange} placeholder="Password"/>
  </div>

  <div class="form-group">
    <label for="conpassword">Confirm Password</label><br/>
    <input type="password" class="form-control" id="conpassword" onChange={this.onChange} placeholder="Confirm password"/>
  </div>
  <br></br>
  <button type="submit" class="btn btn-primary" onClick={this.onSubmit}>Submit</button>
</form>
         </div>               
             </div>
             </div> 
             </div>
        )
    }
}

