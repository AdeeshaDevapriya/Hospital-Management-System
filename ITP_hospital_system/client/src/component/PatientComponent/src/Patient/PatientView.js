import React, {useState} from 'react';
import "./../../css/Patient/PatientView.css"
import axios from 'axios';
import SideMenu from '../../../StaffComponent/SideMenuComponent/SideMenu';

const PatView = (props) => {
    const id = props.match.params.id;
    //console.log(id)

    const [patient, setPatient] = useState([]);

    axios.get(`http://localhost:8087/patient/view/${id}`)
    .then((res) => setPatient(res.data))
    .catch((err) => console.error(err.message))

    console.log(patient)

    const editor = (id) => {
        window.location = `/editPatient/${id}`;
    }

    const goBack = () => {
        window.location = `/infoPatient`;
    }

    return (
        <div className>
            <SideMenu/>
            
            <h2 className ="viewpatheader"> Patient Details View </h2>

            <table className ="viewpattable">
                <thead>
                    
                </thead>

                <tbody>
                <tr className ="viewpattr">
                        <td>Patient ID </td>
                        <td>: {patient._id}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Patient Name </td>
                        <td>: {patient.firstName  + " " + patient.lastName}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Patient Age </td>
                        <td>: {patient.age}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Patient Gender </td>
                        <td>: {patient.gender}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Patient Contact No </td>
                        <td>: Mobile : {patient.mobile} / Land : {patient.land} </td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Patient NIC </td>
                        <td>: {patient.nic}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Gurdien Name </td>
                        <td>: {patient.gurName}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Guardien Address </td>
                        <td>: {patient.guraddress}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Guardien Age </td>
                        <td>: {patient.gurage}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Guardien Gender </td>
                        <td>: {patient.gurgender}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Guardien Contact No </td>
                        <td>: Mobile :{patient.gurmobile} / Land :{patient.gurland}</td>
                    </tr>
                    <tr className ="viewpattr">
                        <td>Guardien NIC </td>
                        <td>: {patient.gurnic}</td>
                    </tr>
                </tbody>
            </table>
            <button className="patviewback" onClick={() =>goBack()}>Back</button>

            <button className="patviewedit" onClick={() => editor(patient._id)} >Edit</button>
        </div>
    );
}
export default PatView;