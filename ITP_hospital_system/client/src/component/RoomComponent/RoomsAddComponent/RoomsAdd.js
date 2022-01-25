import React, {useState} from 'react'
import axios from 'axios';
import RoomSideMenu from '../RoomSideMenuComponent/RoomSideMenu';
import './RoomsAdd.css';


export default function RoomsAdd() {

    const [cat, setCategory] = useState("");
    const [bid, setBedId] = useState("");
    const [rid, setRoomId] = useState("");
    

    function sendData(e){
        e.preventDefault();
        
        const newRoom = {
            cat,
            bid,
            rid
        }

        axios.post("http://localhost:8087/room/add", newRoom)
        .then(() =>{
            alert("New Room Added")
            // setCategory("");
            // setBedId("");
            // setRoomId("");
            window.location = "/RoomsView";
        }).catch((err)=>{
            alert(err)
        })

    }

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
            <h4> Add Room Details</h4>
            
        <div className="formAddRoom">
        <form onSubmit={sendData} >
        
            <div className = "roomadd" >
            <label for = "category" className = "form-label" > Category Type </label>
            <input type = "text" className = "form-control" id = "Category" placeholder = "Enter Category Type" onChange={(e) =>{

              setCategory(e.target.value);  
            
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