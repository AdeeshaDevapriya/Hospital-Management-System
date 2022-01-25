import axios from "axios";
import React, {useState} from "react";
import "./../../css/Appointment/Appointment.css";
import "./../../css/Appointment/AppointmentEdit.css";
import SideMenu from '../../../StaffComponent/SideMenuComponent/SideMenu';

const AppointmentEdit = (prop) => {

   const id = prop.match.params.id;
   const [app, setAppointment] = useState([]);

   axios.get(`http://localhost:8087/appointment/view/${id}`)
   .then((response) => setAppointment(response.data))
   .catch((err) => console.log(err));

  // console.log(app);
        
        const [ano, Anumber] = useState("");
        const [fname, firstname] = useState("");
        const [lname, lastname] = useState("");
        const [age, setAge] = useState("");
        const [email, setEmail] = useState("");
        const [gender, setGender] = useState("");
        const [mobile, setMobile] = useState("");
        const [land, setLand] = useState("");
        const [did, Doctor] = useState("");
        const [date, setDate] = useState("");
        const [day, setday] = useState("");
        const [time, setTime] = useState("");
        const [status, setStatus] = useState("");
        

   const getValues = (e) => {
    e.preventDefault();

        const appointment = {
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
            day,
            time,
            status
            
        };
        axios.put(`http://localhost:8087/appointment/edit/${id}`, appointment)
        .then(()=>  
            alert("appointment updated.."),
            window.location = `/infoAppointment/${id}`)
        .catch((err) => console.log(err));

         console.log(appointment)
     };

     const goBack = (id) => {
         window.location = `/infoAppointment/${id}`;
     }
    
    return(
        <div>
            <SideMenu/>
            <h1 className="patedith1"> Edit Appointment </h1>

            <form className="patientappform patientedit" onSubmit={getValues} target="/appointments">

            
                <label> Patient ID : </label>
                <input  type="text" name="pid"  id="pid" value={app._id} readOnly/> 
                <label> Channel No : </label>
                <input  type="text" name="ano" id="ano" Value={app.appointmentNo} onChange={ (e) => { Anumber(e.target.value);}}/>

                <label> Age : </label>
                <input  type="text" name="age"  id="age" defaultValue={app.age} onChange={ (e) => { setAge(e.target.value);}}/> <br/>

                <label> First Name : </label>
                <input  type="text" name="fname" id="fname" defaultValue={app.firstName} onChange={ (e) => { firstname(e.target.value);}} />

                <label> Last Name : </label>
                <input  type="text" name="lname"  id="lname" defaultValue={app.lastName} onChange={ (e) => { lastname(e.target.value);}}/> <br/>

                <label> Email : </label>
                <input type="text" name="email"  id="email" defaultValue={app.email} onChange={ (e) => { setEmail(e.target.value);}}/> 

                <label> Gender : </label>
                <input list="gen" name="gender" id="editgender" defaultValue={app.gender} onChange={ (e) => { setGender(e.target.value);}}/>
                <datalist id="gen">
                    <option value="male"> male </option>
                    <option value="female"> female </option>
                </datalist> 
                <br/>

                <label> Contact No : </label>
                <input type="text" name="mobile"  id="mobile" defaultValue={app.mobile} onChange={ (e) => { setMobile(e.target.value);}}/>

                <input  type="text" name="land"  id="land"  defaultValue={app.land} onChange={ (e) => { setLand(e.target.value);}}/><br/>

                <label> Doctor Name : </label>
                <input  type="text" name="did"  id="did" defaultValue={app.doctorID} onChange =  { (e) => { Doctor(e.target.value);}}/>

                <label> Date : </label>
                <select id="day" name="day" value={app.day} onChange={app.day} onChange =  { (e) => { setday(e.target.value);}}>
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
                <input  type="month" name="date" defaultValue={app.month} onChange =  { (e) => { setDate(e.target.value);}}/>

                <label> Time : </label>
                <input  type="time" name="time" id="time" defaultValue={app.time} onChange =  { (e) => { setTime(e.target.value);}}/> <br/>

                <label>Payment Status : </label>
                <input list="stat" name="status" id="aptstatus" defaultValue={app.status} onChange = { (e) => { setStatus(e.target.value);}} />
                    <datalist  id="stat">
                    <option value="Paid"> Paid </option>  
                    <option value="NotPaid"> NotPaid </option> 
                </datalist> 
                
                <br/>

                <button className="aptcancelEdit" onClick={() => goBack(app._id)}>Cancel</button>
                <input type ="submit" name="Submit"  id="pateditsubmit" value="Save"/>
            </form>
            
        </div>
    );
} 
export default AppointmentEdit;