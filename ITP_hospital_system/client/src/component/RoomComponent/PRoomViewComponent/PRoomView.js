import React, { Component } from 'react'
import RoomSideMenu from '../RoomSideMenuComponent/RoomSideMenu';
import axios from 'axios';


export default class PRoomView extends Component{

        constructor(props) {
            super(props);
            this.state = {RoomPDModel: [],
            
                PatientId: ""}
        }
        

        componentDidMount(){
            axios.get("http://localhost:8087/patientroom/view")
            .then((res) =>{
                console.log("data", res.data);
                this.setState({
                    RoomPDModel: res.data
                })

                console.log(this.state.RoomPDModel);
                this.state.RoomPDModel.map((item,key) =>{
                    console.log("item", item);
                })
            }).catch((err) =>{
                console.log(err);
            })
        }



        onChange = (e) =>{
            this.setState({[e.target.name]:e.target.value});
        }



        // navigateRoomUpdate = () =>{
        //     window.location = `/RoomUpdate/${this.state}`
        // }


        navigatePRoomAdd = () =>{
            window.location = `/PRoomAdd/${this.state}`
        }

        render(){
            return(

                <div>
                <RoomSideMenu/>
                <div className="Roomcontainer">
                <div className="container">

                    &nbsp;
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <h2>Patients' Room Details</h2>
                    &nbsp;
                    &nbsp;
                    &nbsp;
                   
                    <table className="tableRoomView">
                        <thead>

                            <tr>
                                <th scope="col">Patient Id</th>
                                <th scope="col">Bed Id</th>
                                <th scope="col">Room Id</th>
                                <th scope="col">Category Type</th>
                                <th scope="col">Admitted Date</th>
                                <th scope="col">Discharged Date</th>
                                <th scope="col">No Of Days</th>
                                <th scope="col">Note</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                            {this.state.RoomPDModel.map((item,key) =>(
                                <tr key = {key} onClick ={() =>{
                                    //  this.navigateRoom(item.roomId)
                                }
                                    }>
                                        <td height= "40px">{item.PatientId}</td>
                                        <td>{item.BedId}</td>
                                        <td>{item.RoomId}</td>
                                        <td>{item.Category}</td>
                                        <td>{item.AdmissionDate}</td>
                                        <td>{item.DischargedDate}</td>
                                        <td>{item.NoOfDays}</td>
                                        <td>{item.Note}</td>
                                         
                                        
                                        <a className="fas fa-edit" href={`/RoomUpdate/${item._id}`}>Update</a>
                                        {/* <td> <button className = "fas fa-edit" onClick = {() =>{
                                                         this.navigateRoomUpdate(item._id)}}> Edit </button></td> */}
                                        <td> <button onClick={() => deletePRDetails(item._id)} class="btnRde" className="far fa-trash-alt"> Delete </button></td>
                                        </tr>
                            ))}
                        </tbody>
                    </table>

                    <br/>
                    <br/>
                    <br/>
                    <button className = "btn btn-primary" onClick = {() =>{
                                this.navigatePRoomAdd()}}> Add a new Patient to a room </button>
                 </div>  
                </div>
                </div>
            )
        }
}

const deletePRDetails = (id) =>{
    axios.delete(`http://localhost:8087/patientroom/delete/${id}`)
    .then(res => {
        console.log("Patients' room details deleted successfully");
        alert("Patients' room details deleted successfully");
        window.location = "/PRoomView"
        this.componentDidMount();
    }).catch((err) =>{
        console.log("Error", err);
    })
}