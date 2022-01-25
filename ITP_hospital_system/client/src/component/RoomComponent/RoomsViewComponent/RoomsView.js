import React, { Component } from 'react'
import RoomSideMenu from '../RoomSideMenuComponent/RoomSideMenu';
import axios from 'axios';
import './RoomsView.css';

export default class RoomsView extends Component{

        constructor(props) {
            super(props);
            this.state = {roomDetails: [],
            
                RoomId: ""}
        }
        

        componentDidMount(){
            axios.get("http://localhost:8087/room/view")
            .then((res) =>{
                console.log("data", res.data);
                this.setState({
                    roomDetails: res.data
                })

                console.log(this.state.roomDetails);
                this.state.roomDetails.map((item,key) =>{
                    console.log("item", item);
                })
            }).catch((err) =>{
                console.log(err);
            })
        }



        onChange = (e) =>{
            this.setState({[e.target.name]:e.target.value});
        }



        navigateRoomUpdate = (id) =>{
            window.location = `/RoomUpdate/${id}`
        }


        navigateRoomsAdd = () =>{
            window.location = `/RoomsAdd/${this.state}`
        }



        render(){
            return(

                <div>
                <RoomSideMenu/>
                <div className="Roomcontainer">
                <div className="container">

                    {/* <input className="form-control" type="search" placeholder="search" name="searchQuery" onChange={this.handleSearchArea}/> */}

                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <h2>Room Details</h2>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                   
                    <table className="tableRoomView">
                        <thead>

                            <tr>
                                <th scope="col" > Category Type</th>
                                <th scope="col">Room Id</th>
                                <th scope="col">Bed Id</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.roomDetails.map((item,key) =>(
                                <tr key = {key} onClick ={() =>{
                                    //  this.navigateRoom(item.roomId)
                                }
                                    }>
                                        <td height= "40px">{item.Category}</td>
                                        <td>{item.RoomId}</td> 
                                        <td>{item.BedId}</td>
                                        {/* <a className="fas fa-edit" href={`/RoomUpdate/${item._id}`}>Update</a> */}
                                        <td> <button className = "fas fa-edit" onClick = {() =>{
                                                         this.navigateRoomUpdate(item._id)}}> Edit </button></td>
                                        <td> <button onClick={() => deleteRoom(item._id)} class="btnRde" className="far fa-trash-alt"> Delete </button></td>
                                        </tr>
                            ))}
                        </tbody>
                    </table>

                    <br/>
                    <br/>
                    <br/>
                    <button className = "btn btn-primary" onClick = {() =>{
                                this.navigateRoomsAdd()}}> Add a new room </button>
                 </div>  
                </div>
                </div>
            )
        }
}

const deleteRoom = (id) =>{
    axios.delete(`http://localhost:8087/room/delete/${id}`)
    .then(res => {
        console.log("Room deleted successfully");
        alert("Room deleted successfully");
        window.location = "/RoomsView"
        this.componentDidMount();
    }).catch((err) =>{
        console.log("Error", err);
    })
}