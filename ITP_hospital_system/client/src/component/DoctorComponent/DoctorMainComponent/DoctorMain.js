import React, { Component } from 'react'
import './DoctorMain.css';
import axios from 'axios';
import DoctorSideMenu from '../DoctorSideMenuComponent/DoctorSideMenu'
import img from '../../../Images/World health day-pana.png'
import img1 from '../../../Images/Time management-amico.png'
import img2 from '../../../Images/Web search-pana.png'
import img3 from '../../../Images/People search-cuate.png'

export default class DoctorMain extends Component {


  onSubmitDoctors(){
    window.location=""
}  

onSubmitSchedule(){
  window.location=""
}  
  
onSubmitSearchDoc(){
  window.location="/DoctorSearch"
}

onSubmitSearchSched(){
  window.location="/DoctorScheduleSearch"
}

render() {
        
    return (
      <div>
        <DoctorSideMenu/>
        <div className="DocContainer"> 
        <div className ="container">
        <div className="DoctorAdd">
        <h1>Doctors</h1>
        {/* <div>
        <h2> Doctor Details </h2>
        <img className="imgdoc3" src={img2} alt="Doctors" onClick={this.onSubmitDoctors}></img>
        </div>

        <div>
        <h2> Schedule Details</h2>
        <img className="imgdoc4" src={img3} alt="Schedules" onClick={this.onSubmitSchedule}></img>
        </div> */}

        <div class="imgbtnSch">
        <h2> Doctor Details </h2>
        <img className="imgdoc1" src={img} alt="SearchSchedule" onClick={this.onSubmitSearchDoc}></img>
        </div>

        <div class="imgbtnSch">
        <h2> Schedule Details</h2>
        <img className="imgdoc2" src={img1} alt="SearchDoctor" onClick={this.onSubmitSearchSched}></img>
        </div>

        </div>
        </div>
        </div>
        </div>

    )
  }
}