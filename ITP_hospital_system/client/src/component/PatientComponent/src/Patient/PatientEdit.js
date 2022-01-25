import React, {useState} from 'react';
import "./../../css/Patient/PatientEdit.css";
import "./../../css/Patient/Register.css"
import axios from 'axios';
import SideMenu from '../../../StaffComponent/SideMenuComponent/SideMenu';

const Edit = (_props) => {
    const id = _props.match.params.id;
   // console.log(id);
    const [patientdet, setPatient] = useState([]);

    axios.get(`http://localhost:8087/patient/view/${id}`)
    .then((res) => setPatient(res.data))
    .catch((err) => console.log(err.message));
   // console.log(patient);

   const [fname, firstname] = useState("");
   const [lname, lastname] = useState("");
   const [age, setAge] = useState("");
   const [gender, setGender] = useState("");
   const [mobile, setMobile] = useState("");
   const [land, setLand] = useState("");
   const [nic, setNic] = useState("");

   const [gname, setGname] = useState("");
   const [gaddress, setGaddress] = useState("");
   const [gage, setGage] = useState("");
   const [ggender, setGurgender] = useState("");
   const [gmobile, setGmobile] = useState("");
   const [gland, setGland] = useState("");
   const [gnic, setGnic] = useState("");

   const getValues = (e) =>{
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
       axios.put(`http://localhost:8087/patient/edit/${id}`, patient)
      .then(() => 
            alert("Details updated successfully..."),
            window.location = `/viewPatient/${id}`)
      .catch((err) => console.error(err.message));
      // console.log(patient);

   }

   const goBack = (id) => {
       window.location = `/viewPatient/${id}`;
   }
   
    //console.log(fname);
    return (
        <div>
            <SideMenu/>
            <h1 className="pateditheader"> Edit Patient Details </h1>
        <form className="PatientReg"  onSubmit={getValues}>
            <h2> Patient Informtion </h2> <br/>

            <label>First Name : </label>
            <input type="text" name="fname" defaultValue={patientdet.firstName} onChange={(e) => firstname(e.target.value)}/>

            <label>Last Name : </label>
            <input type="text" name="lname" defaultValue={patientdet.lastName} onChange={(e) =>{lastname(e.target.value)}} />

            <label> Age :</label>
            <input type="text" name="age" id="pateditage" defaultValue={patientdet.age} onChange={(e) => {setAge(e.target.value)}} /> <br/>

            <label> Gender : </label>
                <input list="gen" className="Editgender" id="Patgender" defaultValue={patientdet.gender} onChange={(e)=> setGender(e.target.value)} />
                <datalist id="gen">
                    <option value="male"> male </option>
                    <option value="female"> female </option>
                </datalist> 
                <br/>

            <label> Mobile No :</label>
            <input type="text" name="Mobile" defaultValue={patientdet.mobile} onChange={(e) =>setMobile(e.target.value)}/> 

            <label> Land No :</label>
            <input type="text" name="Land" defaultValue={patientdet.land} onChange={(e) => setLand(e.target.value)}/> <br/>

            <label> NIC :</label>
            <input type="text" name="Patnic" id="Patnic" defaultValue={patientdet.nic} onChange={(e) => setNic(e.target.value)}/> <br/>


             <h2> Guardien Informtion </h2>

            <label>Guardien Name : </label>
            <input type="text" name="Gurname" defaultValue={patientdet.gurName} onChange={(e) => setGname(e.target.value)                                            }/> <br/>

            <label>Guardien Address : </label>
            <input type="text" name="GurAddress" defaultValue={patientdet.guraddress} onChange={(e) => setGaddress(e.target.value)}/> <br/>

            <label> Guardien Age :</label>
            <input type="text" className="Gurage" id="Gurage" defaultValue={patientdet.gurage} onChange={(e) => setGage(e.target.value)}/> <br/>

            <label> Gender : </label>
                <input list="gen" className="Editgender" id="Editgender" defaultValue={patientdet.gurgender} onChange={(e) => setGurgender(e.target.value)} />
                <datalist id="gen">
                    <option value="male"> male </option>
                    <option value="female"> female </option>
                </datalist> 
                <br/>

            <label> Mobile No :</label>
            <input type="text" name="Gurmobile" id="Gurmobile" defaultValue={patientdet.gurmobile} onChange={(e) => setGmobile(e.target.value)}/>

            <label> Land No :</label>
            <input type="text" name="Gurland" defaultValue={patientdet.gurland} onChange={(e) => setGland(e.target.value)} /> <br/>

            <label> NIC :</label>
            <input type="text" className="Gurnic" id="Gurnic" defaultValue={patientdet.gurnic} onChange={(e) => setGnic(e.target.value)}/> <br/>

            
            <input type="submit" id="patsubmitEdit" value="Submit"/>
        </form>
        <button className="patcancelEdit" onClick={() => goBack(patientdet._id)}>Cancel</button> 
        
        </div>
    );
}
export default Edit;