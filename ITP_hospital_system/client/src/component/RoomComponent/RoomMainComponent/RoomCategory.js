import React, { Component } from 'react'
import RoomSideMenu from '../RoomSideMenuComponent/RoomSideMenu';
import './RoomMain.css';


export default class RoomCategory extends Component {

    navigateRoomsView = () =>{
        window.location = `/RoomsView/${this.state}`
    }


    render() {
        return(
        <div>
        <RoomSideMenu/>
        <div className = "containter">
            <center>
            <h3> Category Type </h3> 
            
            <div>
            <button className="CategoryType1btn" onClick = {() =>{
                                this.navigateRoomsView()}}> Ward Room 
                                <p className="catTypeintro"> 
                                <li>Patient bed</li>
                                <li>Guardian Divan </li>
                                <li>Fan</li> 
                                <li>Attached bathroom</li> 
                                <li>Share with other Patient</li></p> </button>
                
            </div>

            <div>
            <button className="CategoryType2btn" onClick = {() =>{
                                this.navigateRoomsView()}}> Standard Room  
                                <p className="catTypeintro"> 
                                <li>TV</li>
                                <li>Telephone </li>
                                <li>Fan</li> 
                                <li>AC</li> 
                                <li>(01) Bed/ (01) Divan</li>
                                <li>Attached bathroom with meals</li></p> </button>
                                
            </div>

            <div>
            <button className="CategoryType3btn" onClick = {() =>{
                                this.navigateRoomsView()}}> Semi Luxury Room  
                                <p className="catTypeintro"> 
                                <li>TV</li>
                                <li>Telephone </li>
                                <li>Fan and (A/C)</li> 
                                <li>(02) Beds</li> 
                                <li>Chair</li>
                                <li>Small Fridge </li>
                                <li>Hot water and Attachedbathroom with meals </li></p> </button>
                
            </div>

            <div>
            <button className="CategoryType4btn" onClick = {() =>{
                                this.navigateRoomsView()}}> Luxury Room  
                                <p className="catTypeintro"> 
                                <li>TV</li>
                                <li>Telephone </li>
                                <li>Fan, (A/C) and Internet</li> 
                                <li>(02) Beds</li> 
                                <li>sofa</li>
                                <li>Microwave Oven andSmall Fridge </li>
                                <li>Hot water and Attachedbathroom with meals </li></p> </button>
                                
            </div>
</center>
            

        </div>
        </div>
        )
    }
}