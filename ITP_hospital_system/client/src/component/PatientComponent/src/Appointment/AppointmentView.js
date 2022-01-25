import React, { Component } from 'react'
import axios from 'axios'; 
import SideMenu from '../../../StaffComponent/SideMenuComponent/SideMenu';
import "./../../css/Appointment/AppointmentView.css";

export default class Appointment extends Component {

    constructor(props){
        super(props);
        this.state = {appointment:[]}
    }

    componentDidMount() {

        axios.get("http://localhost:8087/appointment/view")
        .then((res) => {
            this.setState({
                appointment : res.data
            })
            console.log(this.state.appointment);
        }).catch((err) => console.log(err));        
    };

    navEdit = (id) =>{
        window.location = `/infoAppointment/${id}`;
    }

    navDelete = (id) =>{
        axios.delete(`http://localhost:8087/appointment/delete/${id}`)
        .then(() => alert("Appointment deleted successfully"))
        .catch((err) => console.log(err));
        // window.location = "/viewAppointment";
        window.location.reload();
    }

    render() {
        return (
            <div className="PatientView">

                <SideMenu/>

                <h1> View Appointment</h1>
                <button className="Apnaddbtn"> <a href="/addAppointment"> Add appointment </a> </button>

                <table className="PatientViewhead">
                    <tr>
                        <th> Channel No</th>
                        <th> Patient Name </th>
                        <th> Age </th>
                        <th> Doctor Name </th>
                        <th> Date </th>
                        <th> Time </th>
                        <th> Status </th>
                        <th></th>
                        <th></th>
                    </tr>

                
        
                    <tbody>
                    { this.state.appointment.map((item, key) => (
                            
                            <tr>
                                <td>{item.appointmentNo}</td>
                                <td> {item.firstName + " " + item.lastName}</td>
                                <td>{item.age} </td>
                                <td> {item.doctorID} </td>
                                <td> {item.date} </td>
                                <td> {item.time} </td>
                                <td> {item.status} </td>
                                <td> <button className="PatientViewedit" onClick = {()=>{this.navEdit(item._id)}}>View</button> </td> 
                                <td> <button className="PatientViewdelete" onClick = {()=>{this.navDelete(item._id)}}>Delete</button> </td>
                            </tr>
                         ) ) }
                
                    </tbody>
                            
                
                </table>
            </div>
        )};
};