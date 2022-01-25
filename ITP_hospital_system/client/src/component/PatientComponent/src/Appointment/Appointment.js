import SideMenu from '../../../StaffComponent/SideMenuComponent/SideMenu';
import React, {useState} from "react";
import axios from 'axios';
import "./../../css/Appointment/Appointment.css";

const AddAppointment = () => {

        const [ano, Anumber] = useState("");
        const [fname, firstname] = useState("");
        const [lname, lastname] = useState("");
        const [age, Age] = useState("");
        const [email, Email] = useState("");
        const [gender, Gender] = useState("");
        const [mobile, Mobile] = useState("");
        const [land, Land] = useState("");
        const [did, Doctor] = useState("");
        const [date, Date] = useState("");
        const [day, setday] = useState("");
        const [time, Time] = useState("");
        const [status, Status] = useState("NotPaid");

      //  console.log(status);
    
            const getValues = (e) => {
                e.preventDefault();
           
            const appointment = {
             //   PID,
                fname,
                lname,
                age,
                email,
                gender,
                mobile,
                land,
                ano,
                did,
                date,
                time,
                day,
                status
                
            }

            console.log(appointment);
          
          axios.post('http://localhost:8087/appointment/add', appointment)
          .then(()=> { alert("appointment added..");})
          .catch((err) => {alert(err)});

          window.location = "/viewAppointment";
        }


   return (

        <div>
            <SideMenu/>

            <h1 className="patientapph1"> Add Appointment </h1>

            <form className="patientappform" onSubmit={getValues}>

                <div className="patientdev">
                <label> Channel No : </label>
                <input  type="text" name="ano" onChange={ (e) => { Anumber(e.target.value);}} />  

                <label> Age : </label>
                <input  type="text" name="age" onChange={ (e) => { Age(e.target.value);}}/> <br/>

                <label> First Name : </label>
                <input  type="text" name="fname" onChange={ (e) => { firstname(e.target.value);}} />

                <label> Last Name : </label>
                <input  type="text" name="lname" placeholder="" onChange={ (e) => { lastname(e.target.value);}}/> <br/>

                <label> Email : </label>
                <input type="text" name="email" onChange={ (e) => { Email(e.target.value);}}/> 

                <label> Gender :   </label>
                <input  type="radio" name="gender" value="male" onChange={ (e) => { Gender(e.target.value);}}/>
                <label> Male </label>                
                <input type="radio" name="gender" value="female" onChange={ (e) => { Gender(e.target.value);}}/> 
                <label id ="patreggenfe"> Female </label> <br/>

                <label> Contact No : </label>
                <input type="text" name="mobile" placeholder="Mobile Number" onChange={ (e) => { Mobile(e.target.value);}}/>

                <input  type="text" name="land" placeholder="Land Number" onChange={ (e) => { Land(e.target.value);}}/> <br/>

                <label> Doctor Name : </label>
                <input  type="text" name="did" onChange =  { (e) => { Doctor(e.target.value);}}/>

                <label> Date : </label>
                <select id="day" name="day" onChange =  { (e) => { setday(e.target.value);}}>
                    <option value="01">01</option>
                    <option value="02">02</option>
                    <option value="03">03</option>
                    <option value="04">04</option>
                    <option value="05">05</option>
                    <option value="06">06</option>
                    <option value="07">07</option>
                    <option value="08">08</option>
                    <option value="09">09</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                    <option value="22">22</option>
                    <option value="23">23</option>
                    <option value="24">24</option>
                    <option value="25">25</option>
                    <option value="26">26</option>
                    <option value="27">27</option>
                    <option value="28">28</option>
                    <option value="29">29</option>
                    <option value="30">30</option>
                    <option value="31">31</option>
                </select>
                <input  type="month" name="date" onChange =  { (e) => { Date(e.target.value);}}/>

                <label> Time : </label>
                <input  type="time" name="time" onChange =  { (e) => { Time(e.target.value);}}/> <br/>

                <label> Paid for the appointment</label>
                <input type="checkbox" name="status" value="Paid" onChange = { (e) => { Status(e.target.value);}} />
                <br/>

                <input type="submit" name="submit" value="Submit" />

                </div>

            </form>
        </div>

   );

}

export default AddAppointment;