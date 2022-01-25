import React from 'react';
import "./../css/PMHome.css";
import SideMenu from './../../StaffComponent/SideMenuComponent/SideMenu';

const Home = () => {

    const register = () => {
        window.location ="/registerPatient";
    }

    const patient = () => {
        window.location ="/infoPatient"
    }

    const appointment = () => {
        window.location ="/viewAppointment";
    }
    return(
        <div className="PMHome">
            <SideMenu/>
            <h1> Patient Management System </h1> 

            <button class="PRbtn" onClick={()=> register()}>Patient Registration</button>
            <button class="PIDbtn" onClick={()=> patient()}>Patient Information Details</button>  <br/>

            <button class="ADbtn" onClick={()=> appointment()}>Appointment Details</button>
            <button class="RMbtn">Reports Management</button>
        </div>
    )
}
export default Home;