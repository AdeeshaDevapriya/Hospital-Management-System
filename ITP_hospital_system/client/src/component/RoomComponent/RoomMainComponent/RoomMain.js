import React, { Component } from 'react'
import RoomSideMenu from '../RoomSideMenuComponent/RoomSideMenu';
import './RoomMain.css';
import Roomimg1 from '../../../Images/Roomimg1.png';
import Roomimg2 from '../../../Images/Roomimg2.png';
import Roomimg3 from '../../../Images/Roomimg3.png';


    export default class RoomMain extends Component{
      

        onSubmitRoomCategory() {
            window.location = `/RoomCategory`
        }


        onSubmitRoomPatient() {
            window.location = `/PRoomView`
        }

                                                      
        onSubmitRoomAddPatient() {
            window.location = `/PRoomAdd`
        }


    render(){
    return ( 
        
    <div>
        <RoomSideMenu/>
        <div className = "containter">
            <center>
            <h1> Room Management </h1> 
            
            {/* <div className = "cintainer"> */}
            <img className= "Roomimg1" src = {Roomimg1} alt = "Categories" onClick={this.onSubmitRoomCategory}/>
            {/* <div class="centered">Category Types</div>
            </div> */}
            <img className= "Roomimg2" src = {Roomimg2} alt = "PatientDetails" onClick={this.onSubmitRoomPatient}/>
            <img className= "Roomimg3" src = {Roomimg3} alt = "AddPatient" onClick={this.onSubmitRoomAddPatient}/>

            
            {/* <button className="Mainpagebuttons" onClick = {() =>{
                                this.navigateRoomCategory()}}> Category Types </button> */}

            </center>

       </div>
   </div>
)

    }

}