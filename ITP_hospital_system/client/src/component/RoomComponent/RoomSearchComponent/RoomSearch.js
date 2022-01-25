import React, { useState, useEffect } from "react";
import axios from 'axios';
import './RoomSearch.css';
import RoomSideMenu from '../RoomSideMenuComponent/RoomSideMenu';

function SearchRoom() {
    const [search, setSearch] = useState('');
    const [room, setRoom] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8087/room/view")
            .then((response) => {
                setRoom(response.data);
            })
    }, [])

useEffect(() => {
    setFilteredData(
        room.filter((room) => room.BedId.toLowerCase().includes(search.toLowerCase()))
        )
}, [search], room)


return ( 

    <div>
        <RoomSideMenu/>
    <div className="searchRoom">
        <br/>
    <div className="container" id="searchRoomForm">
        <center>
        <h3 className="searchRoomDetails">SEARCH ROOM DETAILS </h3><br/><br/><br/><br/>
        
        <h5> Enter Bed Id to view the Room details</h5><br/>
        <input className="RoomsearchBar" type="text" placeholder="Search..." onChange={(e) => {
            setSearch(e.target.value);
        }}/>
        <br/><br/>

        <table className="RoomSearchtable">
            <thead className="theadroom">
                <tr>
                    <th scope="col" > ROOM DETAILS</th>
                    {/* <th scope="col" > Room Id</th>
                    <th scope="col" > Category Type</th> */}
                </tr>
            </thead>
            <tbody className="tbodyroom">
                <tr>
                {filteredData.map((val) =>{
                    return <div key={val.id}>
                        <td height= "40px" >{val.BedId}</td> 
                        <td >{val.RoomId} </td> 
                        <td >{val.Category} </td> 
                        {/* <td>{val.house_a} </td>
                        <td>{val.other_a} </td>
                        <td>{val.pf} </td>
                        <td>{val.esi} </td> */}
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
 
 export default SearchRoom;
