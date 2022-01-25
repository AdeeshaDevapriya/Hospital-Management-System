import React, {useState} from 'react'
import axios from 'axios';
import RoomSideMenu from '../RoomSideMenuComponent/RoomSideMenu';


export default function PRoomAdd() {


    const [pid,setPatientId] = useState("");
    const [bid, setBedId] = useState("");
    const [rid, setRoomId] = useState("");
    const [cat, setCategory] = useState("");
    const [adate, setAdmissionDate] = useState("");
    const [ddate, setDischargedDate] = useState("");
    const [ndays, setNoOfDays] = useState("");
    const [note, setNote] = useState("");
    
    
    

    function sendData(e){
        e.preventDefault();
        
        const PatientR = {
            pid,
            bid,
            rid,
            cat,
            adate,
            ddate,
            NoOfdays,
            note  
        }

        console.log(PatientR);

        axios.post("http://localhost:8087/patientroom/add", PatientR)
        .then(() =>{
            alert("New Patient Added to the room")
            // setCategory("");
            // setBedId("");
            // setRoomId("");
            window.location = "/PRoomView";
        }).catch((err)=>{
            alert(err)
        })

    }

    

    // function findDateDifference(adate, ddate){

    /// no of days calculation part ///
    const DisDate = new Date (ddate);
    const AdmDate = new Date (adate);
    const NoOfdays = (DisDate.getTime() - AdmDate.getTime())/(1000*60*60*24);

    console.log(NoOfdays);
        
    // }



    return ( 
        
        <div>
            <RoomSideMenu/>
        <div className="Roomcontainer">
        <div className="container">
            
            &nbsp;
            &nbsp;
            &nbsp;
            <center>
            <h2 style={{fontFamily: "Segoe UI"}}> Room management</h2>
            </center>
            &nbsp;
            &nbsp;
            &nbsp;
            <h4> Add Patients' Room Details</h4>
            
        <div className="formAddRoom">
        <form onSubmit={sendData} >
        

            <div className = "roomadd" >
            <label for = "PatientId" className = "form-label" > PatientId Type </label>
            <input type = "text" className = "form-control" id = "PatientId" placeholder = "Enter Patient Id" onChange={(e) =>{

              setPatientId(e.target.value);  
            
            }} />
            </div>
            &nbsp;
            &nbsp;



            <div className = "roomadd" >
            <label for = "BedId" className = "form-label" > Bed Id </label>
            <input type = "text" className = "form-control" id = "BedId " placeholder = "Enter Bed Id" onChange={(e) =>{

             setBedId(e.target.value); 

            }}/>
            </div>
            &nbsp;
            &nbsp;



            <div className = "roomadd" >
            <label for = "RoomId" className = "form-label" > Room Id </label>
            <input type = "text" className = "form-control" id = "RoomId " placeholder = "Enter Room ID" onChange={(e) =>{

             setRoomId(e.target.value);

            }}/>
            
            </div>
            &nbsp;
            &nbsp;



            <div className = "roomadd" >
            <label for = "category" className = "form-label" > Category Type </label>
            <input type = "text" className = "form-control" id = "Category" placeholder = "Enter Category Type" onChange={(e) =>{

              setCategory(e.target.value);  
            
            }} />
            </div>
            &nbsp;
            &nbsp;


            <div className = "roomadd" >
            <label for = "AdmissionDate" className = "form-label" > AdmissionDate Type </label>
            <input type = "date" className = "form-control" id = "AdmissionDate" placeholder = "Enter No Of Days" onChange={(e) =>{

              setAdmissionDate(e.target.value);  
            
            }} />
            </div>
            &nbsp;
            &nbsp;


            <div className = "roomadd" >
            <label for = "DischargedDate" className = "form-label" > DischargedDate Type </label>
            <input type = "date" className = "form-control" id = "DischargedDate" placeholder = "Enter No Of Days" onChange={(e) =>{

              setDischargedDate(e.target.value);  
            
            }} />
            </div>
            &nbsp;
            &nbsp;


            <div className = "roomadd" >
            <label for = "NoOfDays" className = "form-label" > NoOfDays Type </label>
            <input type = "text" className = "form-control" value={NoOfdays} id = "NoOfDays" placeholder = "Enter No Of Days" onChange={(e) =>{

              setNoOfDays(e.target.value);  
            
            }} />
            </div>
            &nbsp;
            &nbsp;



            <div className = "roomadd" >
            <label for = "Note" className = "form-label" > Note Type </label>
            <input type = "text" className = "form-control" id = "Note" placeholder = "Type your Note" onChange={(e) =>{

              setNote(e.target.value);  
            
            }} />
            </div>
            &nbsp;
            &nbsp;


            <center>
            <button type = "submit" className = "btn btn-primary" > Save </button> 
            </center>
        </form> 
       </div>
       </div>
       </div>
       </div>

    )
}
