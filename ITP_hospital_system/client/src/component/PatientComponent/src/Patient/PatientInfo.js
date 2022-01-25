import React, {useState} from "react";
import "./../../css/Patient/PatientInfo.css";
import axios from "axios";
import SideMenu from '../../../StaffComponent/SideMenuComponent/SideMenu';

const Information = () => {
    const [patient, setPatient] = useState([]);

    axios.get('http://localhost:8087/patient/view')
    .then((res) => setPatient(res.data))
    .catch((err) =>console.error(err.message));

    console.log(patient);

    const remove = (id) => {
        axios.delete(`http://localhost:8087/patient/delete/${id}`)
        .then(() => alert("Patient deleted successfully..."))
        .catch((err) => console.error(err.message));
     }

     const edit = (id) => {
         window.location = `/viewPatient/${id}`;
     }


    return(

        <div className="PatientView">
            <SideMenu/>
            <h1 className="PatientViewhead"> Patient Information </h1>

            <table>
                <thead>
                    <tr>
                        <th className="PatientViewlong"> Patient Name </th>
                        <th> Age </th>
                        <th> Gender </th>

                        <th className="PatientViewlong"> Guardian Name </th>
                        <th> Age </th>
                        <th id='patshort' > Guardian Gender </th>
                        <th id="patshort">  Contact Number </th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
            {
                patient.map((item, key) => (
                <tr>
                    <td className="PatientViewlong">{item.firstName + ' ' + item.lastName}</td>
                    <td className="PatientViewname">{item.age}</td>
                    <td>{item.gender}</td>
                    <td>{item.gurName}</td>
                    <td className="PatientViewnic">{item.gurage}</td>
                    <td>{item.gurgender}</td>
                    <td>{item.gurmobile}</td>
               
                    <td> <button className="PatientViewedit" onClick = {()=>{edit(item._id)}}>View</button> </td> 
                    <td> <button className="PatientViewdelete" onClick={()=>{remove(item._id)}}>Delete</button> </td>
                </tr>
                ))
            }
            </tbody>
            </table>
        </div>
    );
}
export default Information;