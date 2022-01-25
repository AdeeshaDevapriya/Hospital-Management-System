import React, {useState} from "react";
import "./../../css/Patient/Register.css";
import axios from 'axios';
import SideMenu from '../../../StaffComponent/SideMenuComponent/SideMenu';

const Form = () => {
    const [fname, firstname] = useState("");
    const [lname, lastname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [mobile, setMobile] = useState("");
    const [land, setLand] = useState("");
    const [nic, setNic] = useState("");

    const [gname, setGname] = useState("");
    const [gaddress, setGaddress] = useState("");
    const [gage, setgage] = useState("");
    const [ggender, setGGender] = useState("");
    const [gmobile, setGmobile] = useState("");
    const [gland, setGland] = useState("");
    const [gnic, setGnic] = useState("");

    const getValues = (e) => {
        e.preventDefault();

        const patient = {
            fname,
            lname,
            age,
            gender,
            mobile,
            land,
            nic,

            gname,
            gaddress,
            gage,
            ggender,
            gmobile,
            gland,
            gnic
        }
        console.log(patient);
        axios.post('http://localhost:8087/patient/add', patient)
        .then(() => alert("Patient added successfully..."))
        .catch((err) => console.log(err.message));
        window.location = "/infoPatient"
    }


    return (
        <div className="patreg">
            <SideMenu/>
            <h1> Patient Registration</h1> 
        <div>
        <form className="PatientReg" method="post" onSubmit={getValues}>
            <h2> Patient Informtion </h2> <br/>

            <label>First Name : </label>
            <input type="text" name="fname" placeholder="Enter Name" onChange={(e) => firstname(e.target.value)}/>

            <label>Last Name : </label>
            <input type="text" name="lname" placeholder="Enter Name" onChange ={(e) => lastname(e.target.value)}/>

            <label> Age :</label>
            <input type="text" name="age" placeholder="Age" onChange ={(e) => setAge(e.target.value)} /> <br/>

            <label> Gender :</label>
            <input type ="radio" name="gender" value="male" id="pmale" onChange={ (e) => { setGender(e.target.value)}}/>
            <label className ="PatientReggender"> Male </label>
            <input type="radio" name="gender" value="female" id="pfemale" onChange={ (e) => { setGender(e.target.value);}}/>
            <label className ="PatientReggender"> Female </label> <br/>

            <label> Mobile No :</label>
            <input type="text" name="Mobile" placeholder="07**********" onChange = {(e) =>{setMobile(e.target.value)} } /> 

            <label> Land No :</label>
            <input type="text" name="Land" placeholder="0**********" onChange = {(e) =>{setLand(e.target.value)}}/> <br/>

            <label> NIC :</label>
            <input type="text" name="nic" onChange ={ (e) => { setNic(e.target.value);}} /> <br/>


             <h2> Guardien Informtion </h2>

            <label>Guardien Name : </label>
            <input type="text" name="Gurname" placeholder="Enter Name" onChange = {(e) => setGname(e.target.value)} /> <br/>

            <label>Guardien Address : </label>
            <input type="text" name="GurAddress" placeholder="Enter address" onChange={(e) => setGaddress(e.target.value)} /> <br/>

            <label> Guardien Age :</label>
            <input type="text" name="Gurage" placeholder="Age" onChange={(e) => setgage(e.target.value)} /> <br/>

            <label> Guardien Gender :</label>
            <input type ="radio" name="Gurgender" id="gmale" value="male" onChange={(e) => setGGender(e.target.value)}/>
            <label className ="gender"> Male </label>
            <input type="radio" name="Gurgender" id="gfemale" value="female" onChange={(e) => setGGender(e.target.value)} />
            <label className ="gender"> Female </label> <br/>

            <label> Mobile No :</label>
            <input type="text" name="Gurmobile" placeholder="07**********" onChange={(e) => setGmobile(e.target.value)} />

            <label> Land No :</label>
            <input type="text" name="Gurland" placeholder="0**********" onChange={(e) => setGland(e.target.value)} /> <br/>

            <label> NIC :</label>
            <input type="text" name="Gurnic" onChange={(e) => setGnic(e.target.value)} /> <br/>

            <input type ="submit" id="patregsubmit" value="Submit"/>
        </form>
        </div>
        </div>
    );
}
export default Form;