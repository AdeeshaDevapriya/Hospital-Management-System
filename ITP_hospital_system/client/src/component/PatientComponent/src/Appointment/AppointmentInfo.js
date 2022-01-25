import React, { useState } from 'react';
import "./../../css/Appointment/AppointmentInfo.css";
import axios from "axios";
import SideMenu from '../../../StaffComponent/SideMenuComponent/SideMenu';

const PatientInfo = (prop) => {
    const id = prop.match.params.id;
    //console.log(id);

    const [patient, setPatient] = useState([]);

    axios.get(`http://localhost:8087/appointment/view/${id}`)
    .then((res) => setPatient(res.data))
    .catch((err) => console.error(err.message));
    console.log(patient);

    const goback = () => {
        window.location = "/viewAppointment";
    }

    const goedit = (id) => {
        window.location = `/editAppointment/${id}`;
    }

    return (
        <div className="infoPat">
            <SideMenu/>
            <h2 className="infoPatheader"> Appointment Details View </h2>

            <table className="infoPattable">
                <tr id="infoPattr">
                    <td> Appointment ID </td>
                    <td> : {patient._id}</td>
                </tr>
                <tr id="infoPattr">
                    <td> Appointment No </td>
                    <td> : {patient.appointmentNo} </td>
                </tr>
                <tr id="infoPattr">
                    <td> Doctor Name </td>
                    <td> : {patient.doctorID} </td>
                </tr>
                <tr id="infoPattr">
                    <td> Appointment Date </td>
                    <td> : {patient.date} </td>
                </tr>
                <tr id="infoPattr">
                    <td> Appointment Time </td>
                    <td> : {patient.time} </td>
                </tr>
                <tr id="infoPattr">
                    <td> Patient Name </td>
                    <td> : {patient.firstName + " " + patient.lastName} </td>
                </tr>
                <tr id="infoPattr">
                    <td> Patient Age </td>
                    <td> : {patient.age} </td>
                </tr>
                <tr id="infoPattr">
                    <td> Patient Gender </td>
                    <td> : {patient.gender} </td>
                </tr>
                <tr id="infoPattr">
                    <td> Patient Email </td>
                    <td> : {patient.email} </td>
                </tr>
                <tr id="infoPattr">
                    <td> Patient Contact No </td>
                    <td> : Mobile : {patient.mobile}  / Land : {patient.land} </td>
                </tr>
                <tr id="infoPattr">
                    <td> Payment Status </td>
                    <td> : {patient.status} </td>
                </tr>
            </table>
            <button type="button" class="infoaptback" onClick={() => goback()}>Back</button>
            <button type="button" class="infoaptedit" onClick = {() => goedit(patient._id)}>Edit</button>
        </div>
    );
}
export default PatientInfo;