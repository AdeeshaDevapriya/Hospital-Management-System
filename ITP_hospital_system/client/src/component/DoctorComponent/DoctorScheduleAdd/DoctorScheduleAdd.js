import React, { Component } from 'react'
import './DoctorScheduleAdd.css';
import axios from 'axios';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'

export default class DoctorScheduleAdd extends Component {

    constructor(props){
        super(props);
        this.state ={
            doctorid : "",
            name : "",   
            workingDay : "",
            workingTime : "",
            roomNo : "",
    
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        

    }

    onChange(e) {
        this.setState({[e.target.id]: e.target.value});
    }

    onSubmit = async (e) => {
      e.preventDefault();
        const datasetDocSchedule = {  
            name : this.state.name, 
            doctorid : this.state.doctorid,
            workingDay : this.state.workingDay,
            workingTime : this.state.workingTime,
            roomNo : this.state.roomNo,
            
        }
        console.log(datasetDocSchedule);
        

         axios.post(`http://localhost:8087/Schedule/add`,datasetDocSchedule)
        .then(res =>{
            console.log("Successfully added");
            alert("Schedule successfully added!");
          window.location = "/DoctorScheduleView";
        }).catch((err) =>{
            console.log("Error",err);
        }) 
    
}

    
    render() {
        
        return (
          <div>
            <DoctorSideMenuAdmin/>
            <div className="DocSchContainer"> 
            <div className ="container">
            <div className="ScheduleAdd">
            <h1>Plan a New Schedule</h1>

            <form className="AddScheForm">

  <div class="form-group">
    <label for="doctorid">Doctor Id</label>
    <input type="text" class="form-control" id="doctorid" onChange={this.onChange} placeholder="DR"/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="name" >Doctor name</label>
    <input type="text" class="form-control" id="name" onChange={this.onChange} placeholder="Dr."/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="workingDay">Working Date</label>
     <input type="date" class="form-control" id="workingDay" onChange={this.onChange}  placeholder="Date/Month/Year"/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="workingTime">Working Time</label>
    <input type="text" class="form-control" id="workingTime" onChange={this.onChange} placeholder="Hours/Minutes/Seconds"/>
  </div>
  <br></br>

  <div class="form-group">
    <label for="roomNo">Room No</label>
    <input type="text" class="form-control" id="roomNo" onChange={this.onChange} placeholder="roomNo"/>
  </div>
  <br></br>

  
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

