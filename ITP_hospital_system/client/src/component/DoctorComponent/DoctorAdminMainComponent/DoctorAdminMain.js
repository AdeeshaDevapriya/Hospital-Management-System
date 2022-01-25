import React, { Component } from 'react'
import './DoctorAdminMain.css';
import axios from 'axios';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'
import imga1 from '../../../Images/Add User-pana.png'
import imga2 from '../../../Images/Schedule-amico.png'
import imga3 from '../../../Images/Editing body text-pana.png'
import imga4 from '../../../Images/Time management-amico.png'
import imga5 from '../../../Images/Report-pana.png'

export default class DoctorAdminMain extends Component {

    
onSubmitAddDoctors(){
    window.location="/DoctorAdd"
}  

onSubmitAddSchedule(){
  window.location="/DoctorScheduleAdd"
}  

onSubmitEditDoctor(){
    window.location="/DoctorAllView"
}

onSubmitViewSchedule(){
    window.location="/DoctorScheduleView"
}


onSubmitGenRports(){
  window.location="/DoctorReport"
}
    render() {
        
        return (
          <div>
            <DoctorSideMenuAdmin/>
            <div className="DocContainer"> 
            <div className ="container">
            <div className="DoctorAdd">
             <h1> Welcome Admin </h1>
            <h2> Doctors </h2>
            <div className="">
            <div className="imgbtndoc">
            <h4>Add Doctors </h4>  
            <img className="imgdoca1" src={imga1} alt="AddDoctors" onClick={this.onSubmitAddDoctors}></img>
            </div>
            
            <div className="imgbtndoc">
            <h4>Plan a new Schedule</h4> 
            <img className="imgdoca2" src={imga2} alt="AddSchedule" onClick={this.onSubmitAddSchedule}></img>
            </div>
            
            <div className="imgbtndoc">
            <h4>Edit Doctors </h4>
            <img className="imgdoca3" src={imga3} alt="EditDoctor" onClick={this.onSubmitEditDoctor}></img>
            </div>


            <div className="imgbtndoc">
            <h4> Doctor Schedules </h4>
            <img className="imgdoca4" src={imga4} alt="Schedule" onClick={this.onSubmitViewSchedule}></img>
            </div>

            <div className="imgbtndoc">
            <h4> Generate Schedule Reports </h4>
            <img className="imgdoca5" src={imga5} alt="ScheduleReports" onClick={this.onSubmitGenRports}></img>
            </div>

            </div>
            </div>
            </div>
            </div>
            </div>
    
        )
      }
}