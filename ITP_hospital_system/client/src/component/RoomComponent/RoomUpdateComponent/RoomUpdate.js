import React, { useState } from 'react'
import axios from 'axios';

const RoomUpdate = (props) => {

    const id = props.match.params.id;

    // console.log(id);

    const [RUpdate, setRUpdate] = useState([]);

    axios.get(`http://localhost:8087/room/review/${id}`)
    .then((res) => setRUpdate(res.data))
    .catch((err) => console.log(err.message));
    // console.log(RUpdate);

    const [cat, setCategory] = useState("");
    const [bid, setBedId] = useState("");
    const [rid, setRoomId] = useState("");

    const getRoomDet = (e) => {
        e.preventDefault();
        const roomDet = {
            cat,
            bid,
            rid
        }

        // console.log(roomDet);

        axios.put(`http://localhost:8087/room/update/${id}`, roomDet)
        .then(() => alert ("Room Details updated successfully"))
        .catch((err) => console.log(err.message));
        window.location = "/RoomsView";
    }

    

    return(

        <div className="container">
            <h1> Update Room Details</h1>
        <div className="formUpdateRoom">
            <form onSubmit={getRoomDet}>
                <div className="roomAdd">
                    <label for = "category" className = "form-label">Category Type</label>
                    <input type="text" 
                    className="form-control"
                    name="category"
                    placeholder="Enter category type"
                    defaultValue={RUpdate.Category}
                    onChange = {(e) =>  setCategory(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Room ID</label>
                    <input type="text" 
                    className="form-control"
                    name="RoomId"
                    placeholder="Enter Room ID"
                    defaultValue={RUpdate.RoomId}
                    onChange = {(e) => setRoomId(e.target.value)}
                    />
                </div>

                <div className="roomAdd">
                    <label for = "category" className = "form-label">Bed ID</label>
                    <input type="text" 
                    className="form-control"
                    name="BedId"
                    placeholder="Enter Bed ID"
                    defaultValue={RUpdate.BedId}
                    onChange = { (e)=> setBedId(e.target.value)}
                    />
                </div>

                <button className="btn btn-success" type="submit" /* onClick={this.onSubmit} */>
                    <i className="far fa-check-square">
                        &nbsp; Update
                    </i>
                </button>

            </form>

        </div>
        </div>
    )
}

export default RoomUpdate;













































































































// export default class RoomUpdate extends Component{


//     constructor(props) {

//         super(props);
//         this.state={roomDetails:[],
//             cat : "",
//             rid : "",
//             bid : ""

//         }
//     }

    

//     handleInputChange = (e) =>{
//         const {name,value} = e.target;

//         this.setState({
//             ...this.state,
//             [name]:value
//         })
//     }

    

//     onSubmit = (e) =>{

//         e.preventDefault();
//         const id = this.props.match.params.id;

//         const {Category,RoomId,BedId} = this.state;

//         const data={
//             Category:Category,
//             RoomId:RoomId,
//             BedId:BedId
//         }

//         console.log(data)

//         axios.put(`/room/update/${id}`, data).then((res) =>{
//             if(res.data.success){
//                 alert("Room updated successfully")
//                 this.setState(
//                     {
//                         Category:"",
//                         RoomId : "",
//                         BedId : ""
//                     }
//                 )
//             }
//         })
//     }



//     componentDidMount() {

//         const id = this.props.match.params.id;

//         axios.get(`/room/view/${id}`)
//         .then((res) =>{
//             if (res.data.status){
//                this.setState({
//                  Category: res.data.room.category,
//                  RoomId: res.data.room.RoomId,
//                  BedId: res.data.room.BedId
//         }); 
//             console.log(this.state);

//              }
//         });
   
//     }


//     render() {
//         return(

//             <div className="container">
//                 <h1> Update Room Details</h1>
//             <div className="formUpdateRoom">
//                 <form >
//                     <div className="roomAdd">
//                         <label for = "category" className = "form-label">Category Type</label>
//                         <input type="text" 
//                         className="form-control"
//                         name="category"
//                         placeholder="Enter category type"
//                         value={this.state.cat}
//                         onChange={this.handleInputChange}/>
//                     </div>

//                     <div className="roomAdd">
//                         <label for = "category" className = "form-label">Room ID</label>
//                         <input type="text" 
//                         className="form-control"
//                         name="RoomId"
//                         placeholder="Enter Room ID"
//                         value={this.state.rid}
//                         onChange={this.handleInputChange}/>
//                     </div>

//                     <div className="roomAdd">
//                         <label for = "category" className = "form-label">Bed ID</label>
//                         <input type="text" 
//                         className="form-control"
//                         name="BedId"
//                         placeholder="Enter Bed ID"
//                         value={this.state.bid}
//                         onChange={this.handleInputChange}/>
//                     </div>

//                     <button className="btn btn-success" type="submit" onClick={this.onSubmit}>
//                         <i className="far fa-check-square">
//                             &nbsp; Update
//                         </i>
//                     </button>

//                 </form>

//             </div>
//             </div>
//         )





//     }
// }

// //    function sendData(e){
// //         e.preventDefault();
        
// //         const Update = {
// //             Category,
// //             RoomId,
// //             BedId
// //         }


// //     }


