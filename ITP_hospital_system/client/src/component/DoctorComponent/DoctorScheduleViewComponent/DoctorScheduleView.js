import React, { Component } from 'react'
import './DoctorScheduleView.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import moment from 'moment';
import DoctorSideMenuAdmin from '../DoctorSideMenuAdminComponent/DoctorSideMenuAdmin'

export default class DoctorAllView extends Component {
    constructor(props) {
        super(props);
        this.state = { Schedule: [],
            doctorid : "",
            name : "" ,
            workingDay : "",
            workingTime : "",
            roomNo : "",
           
        }
        
    }
    
    
    componentDidMount() {
        axios.get(`http://localhost:8087/Schedule/`)
            .then((res) => {console.log("data", res.data);
                this.setState({
                    Schedule : res.data
                })
            console.log(this.state.Schedule);
            this.state.Schedule.map((item,key)=>{
                console.log("item",item);
            })
                    }).catch((err) => {
                console.log("Error", err);
            })

    }
    // generateReport(){
    //     window.location='/DoctorReport'
    // }


    render() {
        return ( 
            <div class="containerv">

            <div>
            <DoctorSideMenuAdmin/>
            </div>
            
            <div>
            <div className="DocContainer"> 
                <div className="container"> 
                <h1> Doctor Schedules </h1>

                {/* <div>    <button onClick={() => this.generateReport()} className ="button-report"  > Generate Report</button></div> */}
                <table class="table table-success table-striped">

                <thead className="thead-light">
                    <tr>
                        <th scope="col"> Doctor Id </th>
                        <th scope="col"> Doctor Name </th>
                        <th scope="col"> Working Day </th>
                        <th scope="col"> Working Time </th>
                        <th scope="col"> Room Number </th>
                        <th scope="col"> Remove </th>
                        <th scope="col"> Edit </th>

                    </tr>
                </thead>
             <tbody>
                 { this.state.Schedule.map((item,key) =>(
                 <tr>
     <td> {item.doctorid} </td>
     <td> {item.name} </td>
     <td> {moment(item.workingDay).format("DD/MM/YY")} </td> 
     <td> {item.workingTime} </td>
     <td> {item.roomNo}</td>
 
     <td> <button  onClick={() => deleteSchedule(item._id)} class="btndoc1"> Delete </button></td>
     <td> <button  onClick={() => navigateUpdateSchedule(item._id)}class="btndoc2"> Update </button></td>
     </tr>
              ))}
             </tbody>
                
                </table>
                
                </div>
           </div>
          </div>
          </div> 
         )   
    }
}
const navigateUpdateSchedule = (id) => {
    window.location = `/DoctorScheduleUpdate/${id}`
}

    

const deleteSchedule = (id) => {
    axios.delete(`http://localhost:8087/Schedule/delete/${id}`)
    .then(res => {
      console.log("Schedule successfully deleted");
  alert("Schedule successfully deleted!");
  window.location = "/DoctorScheduleView";
  this.componentDidMount();
   }).catch((err) => {
  console.log("Error", err);
     })

    
    }



