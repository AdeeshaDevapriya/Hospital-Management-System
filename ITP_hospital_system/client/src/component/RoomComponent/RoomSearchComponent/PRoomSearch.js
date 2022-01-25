import React, { useState, useEffect } from "react";
import axios from 'axios';
import './RoomSearch.css';
import RoomSideMenu from '../RoomSideMenuComponent/RoomSideMenu';

function SearchPRoom() {
    const [search, setSearch] = useState('');
    const [proom, setPRoom] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8087/patientroom/view")
            .then((response) => {
                setPRoom(response.data);
            })
    }, [])

useEffect(() => {
    setFilteredData(
        proom.filter((proom) => proom.PatientId.toLowerCase().includes(search.toLowerCase()))
        )
}, [search], proom)


return ( 

    <div>
        <RoomSideMenu/>
    <div className="searchRoom">
        <br/>
    <div className="container" id="searchRoomForm">
        <center>
        <h3 className="searchRoomDetails">SEARCH PATIENT'S ROOM DETAILS </h3><br/><br/><br/><br/>
        
        <h5> Enter Patient Id to view the patient's room details</h5><br/>
        <input className="RoomsearchBar" type="text" placeholder="Search..." onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <br/><br/>

        <table className="RoomSearchtable">
            <thead className="theadroom">
                <tr>
                    <th scope="col" > PATIENT'S ROOM DETAILS</th>
                    {/* <th scope="col" > Room Id</th>
                    <th scope="col" > Category Type</th> */}
                </tr>
            </thead>
            <tbody className="tbodyroom">
                <tr>
                {filteredData.map((val) =>{
                    return <div key={val.id}>
                        <td height= "40px" >{val.PatientId}</td> 
                        <td >{val.BedId} </td> 
                        <td >{val.RoomId} </td>  
                        <td>{val.Category} </td>
                        <td>{val.NoOfDays} </td>
                        <td>{val.Note} </td>
                    </div>
                     })}
                   </tr>  
            </tbody>
        </table>
        </center>
    </div>
    </div>
    </div>
);
 }
 
 export default SearchPRoom;